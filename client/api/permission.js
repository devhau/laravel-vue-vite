import api, { baseApi } from '@/api';

const resApi = baseApi('permission');
const updatePermisison = () => api.post('permission/update');
export default {
    ...resApi,
    updatePermisison,
};
