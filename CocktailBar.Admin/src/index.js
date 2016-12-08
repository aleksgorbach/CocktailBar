import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { render } from "react-dom";
import React from "react";

import store from "./store";
import createRoutes from "./routes";

const routes = createRoutes();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);