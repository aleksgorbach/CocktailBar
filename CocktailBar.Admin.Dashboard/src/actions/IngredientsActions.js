import {IngredientsConsts} from './../consts/Consts';

export function changePage(page) {
    return {
        type: IngredientsConsts.pageChanged,
        payload: page
    }
}
