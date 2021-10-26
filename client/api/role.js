import api, { baseApi } from '@/api';

const resApi = baseApi('role');
const getPermission = (id, guardName) => api.get(`role/permission/${id}/${guardName}`);
const putPermission = (id, data) => api.put(`role/permission/${id}`, data);
export default {
    ...resApi,
    getPermission,
    putPermission
};
