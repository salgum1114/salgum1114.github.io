import posts, { IPostState } from './posts';
import authors, { IAuthorState } from './authors';
import tags, { ITagState } from './tags';

export interface IReducer {
    posts: IPostState;
    authors: IAuthorState;
    tags: ITagState;
}

export {
    posts,
    authors,
    tags,
};
