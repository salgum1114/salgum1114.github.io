import instance from './instance';

export const getAuthors = () => instance.get('/_metadata/authors.json');
