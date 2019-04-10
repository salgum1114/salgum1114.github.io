import { updateReducer } from '../utils/ActionHelper';
import { IPayload, IInitialState } from '../types/utils';
import { IAuthor } from '../types/author';
import { AuthorTypes } from '../actions/authors';

export interface IAuthorState extends IInitialState {
    authors: Record<string, IAuthor>;
    author: IAuthor;
}

const initialState: IAuthorState = {
    authors: {},
    author: {},
};

export default function authors(state = initialState, action: IPayload<{ data?: any }>) {
    switch (action.type) {
        case AuthorTypes.SET_AUTHORS:
            return updateReducer(state, 'INIT', { authors: action.payload }, 'SET');
        default:
            return state;
    }
}
