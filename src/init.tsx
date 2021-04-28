import * as React from "react";
import * as ReactDOM from "react-dom";

import __GET_DATA from "./utils/__GET_DATA";

import MainLayout from "./layout/index";

const __RENDER = async () => {

    __GET_DATA()
    
    .then( (data) => {

        function render() {
            console.log(data)
            ReactDOM.render( 
                <MainLayout data={ data } />, 
                document.querySelector("#root")
            );
        }

        render();

    } )

}

__RENDER();
