import { IngredientConsts } from "./../actions/types/ActionTypes";

const initialState = {
    total: 14,
    visiblePages: 5,
    current: 7
}

export default function(state = initialState, action) {
    switch(action.type) {
        case IngredientConsts.changePage:
            return {
                ...state, 
                current: action.page
            };
        default: 
            return state;
    }
}