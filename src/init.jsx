import * as React from "react";
import * as ReactDOM from "react-dom";

import Index from "./index.jsx";

function render() {
  ReactDOM.render(
        <Index />,
        document.querySelector("#root")
    );
}

render();