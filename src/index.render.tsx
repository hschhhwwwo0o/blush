import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./index.app";
import createDataFromFS from "./utils/createDataFromFS";
import removeUndefined from "./utils/removeUndefined";

async function __R() {
    createDataFromFS().then((data) => {
        ReactDOM.render( 
            <App data={ removeUndefined(data) } />, 
            document.querySelector("#root") 
        );
    });
}

__R();
