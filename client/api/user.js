import api, { baseApi } from '@/api';

const resApi = baseApi('user');
const getPermission = (id, guardName) => api.get(`user/permission/${id}/${guardName}`);
const putPermission = (id, data) => api.put(`user/permission/${id}`, data);
export default {
    ...resApi,
    getPermission,
    putPermission,
};
