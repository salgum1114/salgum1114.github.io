import { updateReducer } from '../utils/ActionHelper';
import { IPayload, IInitialState } from '../types/utils';
import { IPost } from '../types/post';
import { PostTypes } from '../actions/posts';

export interface IPostState extends IInitialState {
    posts: Record<string, IPost>;
    post: IPost;
    metadatas: Record<string, IPost>;
}

const initialState: IPostState = {
    posts: {},
    post: {},
    metadatas: {},
};

export default function posts(state = initialState, action: IPayload<{ data?: any }>) {
    switch (action.type) {
        case PostTypes.SET_POSTS:
            return updateReducer(state, 'INIT', { posts: action.payload }, 'SET');
        case PostTypes.SET_METADATA:
            return updateReducer(state, 'INIT', { metadatas: action.payload }, 'SET');
        default:
            return state;
    }
}
