import { SHOW_MENU_HEADER, HIDE_MENU_HEADER } from './constance';

export const showMenuHeader = (payload) => ({
    type: SHOW_MENU_HEADER,
    payload,
});

export const hideMenuHeader = (payload) => ({
    type: HIDE_MENU_HEADER,
    payload,
});
