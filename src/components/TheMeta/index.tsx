import React from "react";
import { ITheMeta } from "./interface";

import "./index.styl";

const TheMeta: React.FunctionComponent<ITheMeta> = ({ title, artist, color }) => {

    return <>
        <div id="TheMeta">
            <h1 style={{ color: color }}>{ title }</h1>
            <h2>{ artist }</h2>
        </div>
    </>
}

export default TheMeta;