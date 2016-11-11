import {NavigationConsts} from './../consts/Consts';

export const navLinkClick = (href) => {
    return {
        type: NavigationConsts.navLinkClick,
        payload: href
    }
}