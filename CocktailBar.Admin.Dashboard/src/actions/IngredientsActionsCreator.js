import {IngredientsConsts} from './../consts/Consts';
const Dispatcher = require('./../dispatchers/AppDispatcher');

const Actions = {
    changePage: function(page) {
        Dispatcher.handleViewAction({
            actionType: IngredientsConsts.pageChanged,
            page: page
        });
    }
}

module.exports = Actions;