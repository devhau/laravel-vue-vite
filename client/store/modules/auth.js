import auth from '@/api/auth';
import { AUTH_CHECK, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '@/common/action';
const initState = async () => {
    const empty = {
        loggin: undefined,
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
            });
        },
        [AUTH_CHECK]: ({ commit, dispatch }, app) => {
            if (app && app.checkPermission) {
                app.checkPermission();
            }
        }
    },
    getters: {
        isAuthenticated: (state) => (flgLoading = true) => (flgLoading && state.status == 'loading') || state.loggin,
        canPermission: (state) => (permisison, flgLoading = true) => {
            if (state.status == 'loading' && flgLoading) return true;
            if (!state.loggin) return false;
            if (!state.isAdmin && !state.permissions.includes(permisison)) return false;
            return true;
        }
    },
    mutations: {
        [AUTH_REQUEST]: state => {
            state.status = 'loading';
        },
        [AUTH_SUCCESS]: (state, data) => {
            state.status = "done";
            state.loggin = true;
            state.user = data.user;
            state.isAdmin = data.isAdmin;
            state.permissions = data.permissions;
        },
        [AUTH_ERROR]: state => {
            state.status = 'error';
            state.loggin = false;
        },
        [AUTH_LOGOUT]: state => {
            state.status = '';
            state.loggin = undefined;
        }
    }
}
