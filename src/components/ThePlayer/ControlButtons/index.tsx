import React from "react";
import PlayPauseSVG from "../PlayPauseSVG";

import { ControlButtonsElement } from "./interface";

import "./index.styl";

const ControlButtons: React.FunctionComponent<ControlButtonsElement> = (props) => {
    return <>
        <div id="ThePlayer__controls" style={{ backgroundColor: props.mainColor }}>
            <div id="ThePlayer__empty" style={{ backgroundColor: props.thirdColor }} />
            <div id = "ThePlayer__play" style={{ backgroundColor: "#F2EEE3" }} onClick = { () => {
                props.playPause(props.isPlay);
            }}>
                <PlayPauseSVG isPlay={ props.isPlay } color={props.mainColor} />
            </div>
            <div id="ThePlayer__prev" style={{ backgroundColor: props.secondColor }} onClick={ () => { props.prevPlay() } }>
                <div />
            </div>
            <div id="ThePlayer__next" onClick={ () => { props.nextPlay() } }>
                <div />
            </div>
        </div>
    </>
}

export default ControlButtons;