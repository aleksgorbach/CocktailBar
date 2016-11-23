import {IngredientConsts} from './../actions/types/ActionTypes';

const STUB = true;
const itemsUpdated = items => ({type: IngredientConsts.itemsUpdated, items: items}) 
const errorReceived = msg => ({type: IngredientConsts.error, msg: msg})

export const onPageChanged = page => ({type: IngredientConsts.changePage, page: page})
export const onAddItem = item => ({type: IngredientConsts.addItem, item: item})

export const onEdit = item => ({type: IngredientConsts.editItem, item: item})
export const onDelete = itemId => ({type: IngredientConsts.deleteItem, itemId: itemId})

export const getList = () => {
    return dispatch => {
        if(STUB) {
            dispatch(itemsUpdated([
                {
                    id: 1,
                    title: "nestea",
                    description: "nice cold tea"
                },
                {
                    id: 2,
                    title: "pepsi",
                    description: "drink for cooling"
                }
            ]))
        } else {
            fetch("http://localhost:5000/api/ingredients")
                .then(res => res.json())
                .then(data => dispatch(itemsUpdated(data)))
                .catch(error => dispatch(errorReceived(error)));
        }
    }
}
