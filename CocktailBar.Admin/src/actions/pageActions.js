import { getList } from "./../api/ingredients"

const onPageChanged = (dispatch, pageType, pageNumber, data) => {
    dispatch({
        type: pageType + "_CHANGE_PAGE",
        page: pageNumber,
        data: data
    });
}

export const changePage = (pageType, pageNumber) => {
    return (dispatch, getState) => {
        getList(pageNumber, 3)
        .then(data => {
            onPageChanged(dispatch, pageType, pageNumber, data);
        })
        .catch(err => {
            console.log(err);
            onPageChanged(dispatch, pageType, pageNumber, []);
        });
    }
}
