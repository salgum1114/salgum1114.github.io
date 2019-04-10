import instance from './instance';

const getMetadata = () => instance.get('/_metadata/metadata.json');
const getPosts = () => instance.get('/_metadata/posts.json');
const getTags = () => instance.get('/_metadata/tags.json');
const getAuthors = () => instance.get('/_metadata/authors.json');
const getRoutes = () => instance.get('/_metadata/routes.json');

export {
    getMetadata,
    getPosts,
    getTags,
    getAuthors,
    getRoutes,
};
