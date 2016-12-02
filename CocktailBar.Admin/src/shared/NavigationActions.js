import {NavigationConsts} from './../actions/types/ActionTypes';

export const navLinkClick = (href) => {
    return {
        type: NavigationConsts.navLinkClick,
        payload: href
    }
}