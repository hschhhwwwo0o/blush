import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./index.app";
import createDataFromFS from "./utils/createDataFromFS";
import removeUndefined from "./utils/removeUndefined";

import { Provider } from "react-redux";
import store from "./redux/index";

async function __R() {
    createDataFromFS().then((data) => {
        ReactDOM.render( 
            <Provider store={store}>
                <App data={ removeUndefined(data) } />
            </Provider>, 
            document.querySelector("#root") 
        );
    });
}

__R();
