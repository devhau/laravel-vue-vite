import auth from '@/api/auth';
import { AUTH_CHECK, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '@/common/action';
import { HTTP_STATUS } from '@/common/constant';
const initState = async () => {
    const empty = {
        loggin: true,
        user: {},
        permissions: [],
        status: '',
        isAdmin: false
    };
    return empty;
}
export default {
    state: initState(),
    actions: {
        [AUTH_REQUEST]: ({ commit, dispatch }, app) => {
            commit(AUTH_REQUEST);
            auth.getUserMe().then((rs) => {
                if (rs.status != 401 && rs?.data) {
                    commit(AUTH_SUCCESS, rs?.data?.data);
                } else {
                    commit(AUTH_ERROR);
                    commit(AUTH_LOGOUT);
                }
                dispatch(AUTH_CHECK, app);
            }).catch(() => {
                commit(AUTH_ERROR);
                commit(AUTH_LOGOUT);
                dispatch(AUTH_CHECK, app);
            });
        },
        [AUTH_CHECK]: ({ commit, dispatch }, app) => {
            if (app && app.checkPermission) {
                app.checkPermission();
            }
        },
        [AUTH_LOGOUT]: ({ commit, dispatch }, app) => {
            commit(AUTH_LOGOUT);
            auth.clearToken(true);
        }
    },
    getters: {
        isAuthenticated: (state) => (flgLoading = true) => (flgLoading && state.status == HTTP_STATUS.LOADING) || state.loggin,
        canPermission: (state) => (permission, flgLoading = true) => {
            if (state.status == HTTP_STATUS.LOADING && flgLoading) return true;
            if (!state.loggin) return false;
            if (!state.isAdmin && !state.permissions.includes(permission)) return false;
            return true;
        }
    },
    mutations: {
        [AUTH_REQUEST]: state => {
            state.status = HTTP_STATUS.LOADING;
        },
        [AUTH_SUCCESS]: (state, data) => {
            state.status = HTTP_STATUS.DONE;
            state.loggin = true;
            state.user = data.user;
            state.isAdmin = data.isAdmin;
            state.permissions = data.permissions;
        },
        [AUTH_ERROR]: state => {
            state.status = HTTP_STATUS.ERORR;
            state.loggin = false;
        },
        [AUTH_LOGOUT]: state => {
            state.status = HTTP_STATUS.NONE;
            state.loggin = false;
            state.user = undefined;
            state.isAdmin = undefined;
            state.permissions = undefined;
        }
    }
}
