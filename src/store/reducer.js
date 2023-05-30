import { SHOW_MODAL_LOGIN, HIDE_MODAL_LOGIN, LOGIN, LOGOUT } from './constance';

const userLogin = JSON.parse(localStorage.getItem('user-login'));
const accounts = JSON.parse(localStorage.getItem('accounts'));
let logInAcc = true;
let user;

if (userLogin.name.length > 0) {
    [user] = accounts.filter((account) => account.name === userLogin.name);
    logInAcc = true;
} else {
    logInAcc = false;
    user = { liked: [], following: [] };
}

export const initState = {
    currentUser: {
        logIn: logInAcc,
        liked: [...user.liked],
        following: [...user.following],
    },
    showModalLogin: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SHOW_MODAL_LOGIN:
            return {
                ...state,
                showModalLogin: true,
            };
        case HIDE_MODAL_LOGIN:
            return {
                ...state,
                showModalLogin: false,
            };
        case LOGIN:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    logIn: true,
                    liked: [...action.payload.liked],
                    following: [...action.payload.following],
                },
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    logIn: false,
                    liked: [],
                    following: [],
                },
            };
        default:
            throw new Error('Invalid action!');
    }
}

export default reducer;
