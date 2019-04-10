import posts, { IPostState } from './posts';
import authors, { IAuthorState } from './authors';

export interface IReducer {
    posts: IPostState;
    authors: IAuthorState;
}

export {
    posts,
    authors,
};
