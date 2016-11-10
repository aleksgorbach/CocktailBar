const $ = require('jquery');
const dispatcher = require('./../dispatchers/AppDispatcher');
import {IngredientsConsts} from './../consts/Consts';
import EventEmitter from 'events';

var _data = [];

var CHANGE_EVENT = "change";

var changePage = function (page) {
    $.get("http://localhost:5000/api/ingredients", {
        page: page
    }).then(data => {
        _data = data;
        Store.emitChange();
    });
}

class IngredientsStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getIngredients() {
        return _data;
    }
}

const Store = new IngredientsStore();

dispatcher.register(payload => {
    const action = payload.action;
    switch (action.actionType) {
        case IngredientsConsts.pageChanged:
            changePage(action.page)
            break;
    }
})

module.exports = Store;