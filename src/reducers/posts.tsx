import { TYPES, COMMAND, updateReducer } from '../utils/ActionHelper';
import { IPayload, IInitialState } from '../types/utils';
import { IPost } from '../types/post';

export interface IPostsState extends IInitialState {
    posts: IPost[];
    post: IPost;
}

const initialState: IPostsState = {
    posts: [],
    post: {},
};

export default function posts(state = initialState, action: IPayload<{ data?: any }>) {
    switch (action.type) {
        default:
            return state;
    }
}
