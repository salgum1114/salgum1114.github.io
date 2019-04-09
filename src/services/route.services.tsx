import instance from './instance';

export const getRoutes = () => instance.get('/routes.json');
