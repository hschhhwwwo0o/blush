import React from "react";
import PlayPauseSVG from "../PlayPauseSVG";

import { ControlButtonsElement } from "./interface";

import "./index.styl";

const ControlButtons: React.FunctionComponent<ControlButtonsElement> = (props) => {
    return <>
        <div id="ThePlayer__controls" style={{ backgroundColor: props.mainColor }}>
            <div id="ThePlayer__empty" style={{ backgroundColor: props.thirdColor }} />
            <div id="ThePlayer__play" style={{ backgroundColor: "#F2EEE3" }} onClick = {() => { props.playPause(props.isPlay); }}>
                <PlayPauseSVG isPlay={ props.isPlay } color={ props.mainColor } />
            </div>
            <div id="ThePlayer__prev" style={{ backgroundColor: props.secondColor }} onClick={() => { props.prevPlay() }}>
                <div />
            </div>
            <div id="ThePlayer__next" onClick={() => { props.nextPlay() }}>
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4643 16.4852L5.7048 29.3843C4.82953 30.2052 3.41043 30.2052 2.53558 29.3843C1.66067 28.564 1.66067 27.2337 2.53558 26.4135L14.7106 14.9998L2.53594 3.58643C1.66102 2.76586 1.66102 1.43566 2.53594 0.615424C3.41085 -0.205141 4.82989 -0.205141 5.70516 0.615424L19.4647 13.5147C19.9021 13.9251 20.1206 14.4623 20.1206 14.9997C20.1206 15.5374 19.9017 16.075 19.4643 16.4852Z" fill={props.mainColor}/>
                </svg>
            </div>
        </div>
    </>
}

export default ControlButtons;