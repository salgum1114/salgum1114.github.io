import instance from './instance';

export const getRoutes = () => instance.get('/_metadata/routes.json');
