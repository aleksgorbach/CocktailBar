var jquery = require('jquery');
import {ServerRoot} from './../consts/consts';

var _data = [];

class IngredientsStore {
    getData(onSuccess) {
        jquery.when(jquery.ajax(ServerRoot + "ingredients")).then(function(data, status, xhr) {
            alert(data);
            onSuccess(data);
        })
    }
}

let Store = new IngredientsStore();

module.exports = Store;