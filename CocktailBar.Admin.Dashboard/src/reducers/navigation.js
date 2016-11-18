import {NavigationConsts} from './../consts/Consts';

const initialState = {
    activePage: "#"
}

export default function(state=initialState, action) {
    switch(action.type){
        case NavigationConsts.navLinkClick:
            return {
                ...state,
                activePage: action.payload
            }
        default: 
            return state;
    }
}