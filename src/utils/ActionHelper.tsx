/*
    Creates $NAME_REQUEST, $NAME_SUCESS, $NAME_FAILURE actions
    accessed by $NAME.$STATE, e.g. FETCH_MESSAGE.REQUEST
*/
import { createAction, ActionFunctionAny, Action } from 'redux-actions';
import update from 'immutability-helper';
import { Dispatch } from 'redux';
import { INetworkError } from '../types/utils';
import { AxiosResponse } from 'axios';

export type PendingTypes = 'INIT' | 'REQUEST' | 'SUCCESS' | 'FAILURE';
export type CommandTypes = 'SET' | 'MERGE' | 'PUSH' | 'ADD';

export interface IPendingTypes {
    INIT?: string;
    REQUEST?: string;
    SUCCESS?: string;
    FAILURE?: string;
}

export interface IPayload<Payload extends { [K in keyof Payload]?: any } = {}> {
    type: string;
    payload?: Payload;
}

export const INIT = 'INIT';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const TYPES: IPendingTypes = {
    INIT, REQUEST, SUCCESS, FAILURE,
};

export const PUSH = 'PUSH';
export const UNSHIFT = 'UNSHIFT';
export const SPLICE = 'SPLICE';
export const SET = 'SET';
export const UNSET = 'UNSET';
export const MERGE = 'MERGE';
export const APPLY = 'APPLY';
export const ADD = 'ADD';

export const COMMAND = {
    MERGE, SET, PUSH,
};

export const createActionTypes = (base: string): { [type in PendingTypes]?: string }  => {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        return Object.assign(acc, { [type]: `${base}_${type}` });
    }, {});
};

export const createActionHelper = (base: string) => {
    return createAction(base);
};

export const createActionsHelper = (base: any): { [type in PendingTypes]?: ActionFunctionAny<Action<any>> } => {
    return Object.keys(base).reduce((acc, type) => {
        const actionType = base[type];
        return Object.assign(acc, { [type]: createAction(actionType) });
    }, {});
};

export const createRequestHelper = (base: IPendingTypes, api: (...args: any) => Promise<AxiosResponse>, payload?: any, headers?: any): Promise<AxiosResponse> =>
    (dispatch: Dispatch) => {
    const actionCreators = createActionsHelper(base);
    dispatch(actionCreators.REQUEST(payload));
    return api(payload, headers).then((response: AxiosResponse) => {
        dispatch(actionCreators.SUCCESS(response.data));
        return response;
    }).catch((error: INetworkError) => {
        dispatch(actionCreators.FAILURE(error.response));
        throw error;
    });
};

export const updateReducer = (state: any, actionType: PendingTypes, payload?: any, command?: CommandTypes) => {
    if (!payload) {
        return update(state, {
            statusMessage: {
                $set: actionType,
            },
        });
    }
    return Object.keys(payload).reduce((prev, curr) => {
        if (command === SET) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $set: payload[curr],
                },
            });
        } else if (command === MERGE) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $merge: payload[curr],
                },
            });
        } else if (command === PUSH) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $push: payload[curr],
                },
            });
        }
    }, state);
};
