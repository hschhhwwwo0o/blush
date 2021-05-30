import React from "react";
import { ITheTracklist } from "./interface";
import "./index.styl";

const TheTracklist: React.FunctionComponent<ITheTracklist> = ({ data }) => {
    return <>
        <div id="theTracklist">
            <h1>
                Entropy
            </h1>
            <h1>
                Frail State Of Mind
            </h1>
            <h1>
                Out Of The Black
            </h1>
            <h1>
                Mind
            </h1>
            <h1>
                Hello Caves
            </h1>
            <h1>
                The Moon I Loved
            </h1>
            <h1>
                Butterfly Effect
            </h1>
            <h1>
                Me
            </h1>
        </div>
    </>
}

export default TheTracklist;