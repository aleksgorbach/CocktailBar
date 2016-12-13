import { save } from "./../api/ingredients";

export const editItemRequested = item => ({
    type: "INGR_EDIT_REQUESTED",
    item: item
})

const onItemSaved = item => ({
    type: "INGR_EDITED",
    item: item
})

export const onItemEdited = item => {
    return dispatch => {
        save(item)
        .then(data => {
            onItemSaved(item);
        })
        .catch(err => {
            console.log(err);
        });
    }
}