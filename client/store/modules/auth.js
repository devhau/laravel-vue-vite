import auth from '@/api/auth';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '@/common/action';
const initState = async () => {
    const empty = {
        loggin: auth.checkAuth(),
        user: {},
        status: ''
    };
    return empty;
}
export default {
    state: initState(),
    actions: {
        [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
            commit(AUTH_REQUEST);
            auth.getUserMe().then(({ data }) => {
                if (data && data.OK) {
                    commit(AUTH_SUCCESS, data.data);
                } else {
                    commit(AUTH_ERROR);
                    commit(AUTH_LOGOUT);
                }
            });
        }
    },
    getters: {
        isAuthenticated: () => auth.checkAuth()
    },
    mutations: {
        [AUTH_REQUEST]: state => {
            state.status = "loading";
        },
        [AUTH_SUCCESS]: (state, data) => {
            console.log(data);
            state.status = "done";
            state.loggin = true;
            state.user = data.user;
        },
        [AUTH_ERROR]: state => {
            state.status = 'error';
            state.loggin = false;
        },
        [AUTH_LOGOUT]: state => {
            state.status = '';
            state.loggin = false;
        }
    }
}
