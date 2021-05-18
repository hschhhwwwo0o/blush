import React from "react";
import { ITheMeta } from "./interface";

import "./index.styl";

const TheMeta: React.FunctionComponent<ITheMeta> = ({ title, artist, mainColor }) => {

    return <>
        <div id="TheMeta">
            <h1 style={{ color: mainColor }}>{ title }</h1>
            <h2>{ artist }</h2>
        </div>
    </>
}

export default TheMeta;