import * as React from "react";
import * as ReactDOM from "react-dom";

import createDataFromFS from "./utils/createDataFromFS";
import MainLayout from "./layout/index";

async function __R() {
    createDataFromFS().then((data) => {
        ReactDOM.render( 
            <MainLayout data={ data } />, 
            document.querySelector("#root") 
        );
    });
}

__R();
