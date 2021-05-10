import React from "react";
import "./index.styl";

const TheMeta: React.FunctionComponent<{ title: string, artist: string }> = ({ title, artist }) => {
    return <>
        <div id="TheMeta">
            <h1>{ title }</h1>
            <h2>{ artist }</h2>
        </div>
    </>
}

export default TheMeta;