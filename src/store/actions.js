import { SHOW_MODAL_LOGIN, HIDE_MODAL_LOGIN, LOGOUT, LOGIN } from './constance';

export const showLogin = (payload) => ({
    payload,
    type: SHOW_MODAL_LOGIN,
});

export const hideLogin = (payload) => ({
    payload,
    type: HIDE_MODAL_LOGIN,
});

export const handleLogin = (payload) => ({
    payload,
    type: LOGIN,
});

export const handleLogout = (payload) => ({
    payload,
    type: LOGOUT,
});
