import { TYPES, COMMAND, updateReducer } from '../utils/ActionHelper';
import { IPayload, IInitialState } from '../types/utils';
import { IAuthor } from '../types/author';

export interface IAuthorsState extends IInitialState {
    authors: IAuthor[];
    author: IAuthor;
}

const initialState: IAuthorsState = {
    authors: [],
    author: {},
};

export default function authors(state = initialState, action: IPayload<{ data?: any }>) {
    switch (action.type) {
        default:
            return state;
    }
}
