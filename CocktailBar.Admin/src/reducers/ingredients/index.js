const initialState = {
    data: [],
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
        default: {
            return state;
        }
    }
}

export default reducer;