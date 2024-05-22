import axios from 'axios';
const request = axios.create({
    baseURL: 'http://localhost:3001',
});

export const get = async (path, option) => {
    const res = await request.get(path, option);
    return res.data;
};
export default request;
