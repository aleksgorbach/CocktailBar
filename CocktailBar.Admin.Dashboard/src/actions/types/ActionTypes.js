export const ServerRoot = "http://localhost:5000/api/"
var keyMirror = require('keymirror');

export const IngredientConsts = keyMirror({
    changePage: null,
    addItem: null,
    itemsUpdated: null,
    error: null,
    editItem: null,
    deleteItem: null
})

export const NavigationConsts = keyMirror({
    navLinkClick: null
})