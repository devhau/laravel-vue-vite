import api, { baseApi } from '@/api';

const resApi = baseApi('role');
const permission = (id, guardName) => api.get(`role/permission/${id}/${guardName}`);
export default {
  ...resApi,
  permission,
};
