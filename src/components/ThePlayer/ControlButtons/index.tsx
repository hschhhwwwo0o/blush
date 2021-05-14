import React from "react";
import PlayPauseSVG from "../PlayPauseSVG";

const ControlButtons: React.FunctionComponent<any> = (props) => {
    return <>
        <div id="ThePlayer__controls">
            <div id="ThePlayer__empty" />
            <div id = "ThePlayer__play" onClick = {() => {
                props.playPause(props.isPlay);
            }}>
                <PlayPauseSVG isPlay={ props.isPlay } />
            </div>
            <div id="ThePlayer__prev" onClick={ props.prevPlay }>
                <div />
            </div>
            <div id="ThePlayer__next" onClick={ props.nextPlay }>
                <div />
            </div>
        </div>
    </>
}

export default ControlButtons;