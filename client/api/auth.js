import api from '@/api';

const keyAuth = 'vue_auth_token';
const login = (data) => api.post('auth/login', data);
const register = (data) => api.post('auth/register', data);
const changePassword = (data) => api.post('auth/changePassword', data);
const me = () => api.get('auth/user');
const logout = () => api.get('auth/logout');
let permission = [];
let isAdmin = false;
const $can = ($permission) => isAdmin || permission?.includes($permission);
const setPermission = ($permissions) => permission = $permissions ?? [];
const checkAuth = () => {
    const accessToken = localStorage.getItem(keyAuth);
    if (accessToken != undefined) {
        api.setToken(accessToken);
        return true;
    }
    return false;
};
const getUserMe = async () => {
    if (!checkAuth()) {
        clearToken();
        return undefined;
    }
    try {
        let rs = await me();
        let { permissions: _permission, isAdmin: _isAdmin } = rs?.data?.data;
        setPermission(_permission);
        isAdmin = _isAdmin;
        return rs;
    } catch {
        clearToken(true);
        return undefined;
    }

}
const setToken = (accessToken) => {
    api.setToken(accessToken);
    localStorage.setItem(keyAuth, accessToken);
};

const clearToken = (isAuth) => {
    if (isAuth) {
        logout();
    }
    setPermission([]);
    api.clearToken();
    localStorage.removeItem(keyAuth);
};
export default {
    login, register, me, checkAuth, setToken, clearToken, changePassword,
    $can, setPermission, getUserMe
};
