import Axios from 'axios';

const { protocol, hostname, port } = location;

const baseURL = `${protocol}//${hostname}:${port}`;

const instance = Axios.create({
    baseURL,
    timeout: 30000,
    withCredentials: true,
});

export default instance;
