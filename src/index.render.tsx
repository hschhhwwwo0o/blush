import * as React from "react";
import * as ReactDOM from "react-dom";

import createDataFromFS from "./utils/createDataFromFS";
import removeUndefined from "./utils/removeUndefined";
import getSkins from "./utils/getSkins";

import { IPromiseSkins } from "./types";

import { Provider } from "react-redux";
import App from "./index.app";
import store from "./redux/index";

async function __render() {
    getSkins().then((skins: IPromiseSkins) => {
        createDataFromFS(skins.skins.length).then((data) => {
            ReactDOM.render( 
                <Provider store={store}>
                    <App 
                        data={removeUndefined(data)} 
                        skins={skins.skins} 
                    />
                </Provider>, 
                document.querySelector("#root") 
            );
        });
    });
};

__render();
