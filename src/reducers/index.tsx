import posts, { IPostsState } from './posts';
import authors, { IAuthorsState } from './authors';

export interface IReducer {
    posts: IPostsState;
    authors: IAuthorsState;
}

export {
    posts,
    authors,
};
