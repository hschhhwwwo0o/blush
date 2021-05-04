import * as React from "react";
import * as ReactDOM from "react-dom";

import __GET_DATA from "./utils/__GET_DATA";
import MainLayout from "./layout/index";

async function __R() {
    __GET_DATA().then((data) => {
        ReactDOM.render( 
            <MainLayout data={ data } />, 
            document.querySelector("#root") 
        );
    });
}

__R();
