import { createActionHelper } from '../../utils/ActionHelper';
import { SET_POSTS, SET_METADATA, SET_POST } from './PostTypes';

export const setPosts = createActionHelper(SET_POSTS);

export const setPost = createActionHelper(SET_POST);

export const setMetadata = createActionHelper(SET_METADATA);
