import { IngredientConsts } from "./../actions/types/ActionTypes";

const initialState = {
    items: [],
    active: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case IngredientConsts.itemsUpdated:
            return {
                ...state,
                items: action.items
            }
        case IngredientConsts.editItem:
            console.log(action.item)
            return {
                ...state,
                active: action.item
            }
        default: 
            return state;
    }
}