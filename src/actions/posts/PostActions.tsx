import { createActionHelper } from '../../utils/ActionHelper';
import { SET_POSTS, SET_METADATA } from './PostTypes';

export const setPosts = createActionHelper(SET_POSTS);

export const setMetadata = createActionHelper(SET_METADATA);
