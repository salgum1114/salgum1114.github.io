import instance from './instance';

const getAllPosts = () => instance.get('/_posts');

const getPosts = (url: string) => instance.get(url);

const getPost = (url: string) => instance.get(url);

export {
    getAllPosts,
    getPosts,
    getPost,
}