import { updateReducer } from '../utils/ActionHelper';
import { IPayload, IInitialState } from '../types/utils';
import { TagTypes } from '../actions/tags';
import { ITag } from '../types/tag';

export interface ITagState extends IInitialState {
    tags: Record<string, ITag>;
}

const initialState: ITagState = {
    tags: {},
};

export default function authors(state = initialState, action: IPayload<{ data?: any }>) {
    switch (action.type) {
        case TagTypes.SET_TAGS:
            return updateReducer(state, 'INIT', { tags: action.payload }, 'SET');
        default:
            return state;
    }
}
