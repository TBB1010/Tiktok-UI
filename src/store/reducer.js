import { SHOW_MENU_HEADER, HIDE_MENU_HEADER } from './constance';

export const initState = {
    menuHeader: true,
};

function reducer(state, action) {
    switch (action.type) {
        case SHOW_MENU_HEADER:
            return {
                ...state,
                menuHeader: true,
            };
        case HIDE_MENU_HEADER:
            return {
                ...state,
                menuHeader: false,
            };
        default:
            throw new Error('Invalid action!');
    }
}

export default reducer;
