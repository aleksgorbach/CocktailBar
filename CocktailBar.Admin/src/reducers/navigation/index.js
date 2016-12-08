const initialState = {
    activePage: "/"
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "NAVIGATION_CHANGE_PAGE": {
            return {
                ...state,
                activePage: action.page
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;