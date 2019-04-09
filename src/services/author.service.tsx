import instance from './instance';

export const getAuthors = () => instance.get('/authors.json');
