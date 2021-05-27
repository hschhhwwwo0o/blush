import React from "react";
import { IBG } from "./interface";
import "./index.styl";

const BG: React.FunctionComponent<IBG> = ({ online, image }) => {
    const useImage = { backgroundImage: `url(${image})` };
    const useStandartColor = { backgroundColor: "#461027" };

    return <div id="bg" style={ online ? useImage : useStandartColor } />
}

export default BG;