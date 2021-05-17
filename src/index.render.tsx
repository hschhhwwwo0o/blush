import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./index.app";
import createDataFromFS from "./utils/createDataFromFS";
import getSkins from "./utils/getSkins";
import removeUndefined from "./utils/removeUndefined";

import { Provider } from "react-redux";
import store from "./redux/index";

async function __R() {
    getSkins().then((skins) => {
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

__R();
