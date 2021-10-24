import api, { baseApi } from '@/api';

const resApi = baseApi('user');
const getPermission = (id, guardName) => api.get(`user/permission/${id}/${guardName}`);
const putPermission = (id, data) => api.put(`user/permission/${id}`, data);
const userCheckin = () => api.post('user/checkin');
const userCheckout = () => api.post('user/checkout');
export default {
    ...resApi,
    getPermission,
    putPermission,
    userCheckin,
    userCheckout
};
