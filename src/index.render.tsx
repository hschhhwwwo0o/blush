import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import getSkins from "./utils/getSkins";
import { IPromiseSkins } from "./types";
import createDataFromFS from "./utils/createDataFromFS";
import removeUndefined from "./utils/removeUndefined";
import App from "./index.app";
import store from "./redux/index";
import NoInternet from "./components/NoInternet";

/**
 *
 * Main render. Mount app in html.
 *
 * Search music on filesystem.
 *
 * Fetch skins.
 *
 * Create application.
 *
 * @async
 * @function  __render
 *
 */
async function __render() {
  getSkins()
    .catch(() => {
      ReactDOM.render(
        <Provider store={store}>
          <NoInternet />
        </Provider>,
        document.querySelector("#root"),
      );
    })
    .then((skins: IPromiseSkins) => {
      createDataFromFS(skins.skins.length).then((data) => {
        ReactDOM.render(
          <Provider store={store}>
            <App data={removeUndefined(data)} skins={skins.skins} online={true} />
          </Provider>,
          document.querySelector("#root"),
        );
      });
    });
}

__render();
