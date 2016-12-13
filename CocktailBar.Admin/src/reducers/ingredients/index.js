const initialState = {
    data: [],
    active: {},
    pagination: {
        currentPage: 0,
        totalPages: 20,
        visiblePages: 3
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INGR_ADD': {
            return {
            ...state,
                data: [
                    ...state.ingredients,
                    action.ingredient
                ]
            }
        }
        case 'INGR_CHANGE_PAGE': {
            return {
                ...state,
                data: action.data,
                pagination: {
                    ...state.pagination,
                    currentPage: action.page
                }
            }
        }
        case 'INGR_EDIT_REQUESTED': {
            return {
                ...state,
                active: action.item
            }
        }
        case 'INGR_EDITED': {
            const prevItem = state.data.find(x => x.id == action.item.id);
            const data = [...state.data];
            const index = data.indexOf(prevItem);
            if (index !== -1) {
                data[index] = action.item;
            }
            return {
                ...state,
                data: data
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;