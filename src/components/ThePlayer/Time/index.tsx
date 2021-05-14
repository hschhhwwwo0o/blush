import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import formatTime from "../../../utils/formatTime";

import { ITimeElement } from "./interface";
import "./index.styl";

const Time: React.FunctionComponent<ITimeElement> = (props) => {

    const rangeRef = useRef(null);
    const dispatch = useDispatch();

    return <>
        <div id="ThePlayer__timer">
            <section>
                <div id="ThePlayer__time">
                    <h2>
                        { formatTime(props.currentTime) }
                    </h2>
                    <h2>
                        { formatTime(props.duration) }
                    </h2>
                </div>
                <input 
                    id              = "ThePlayer__timeline"
                    ref             = { rangeRef }
                    type            = "range" 
                    min             = "0" 
                    max             = { props.duration } 
                    step            = "any"
                    value           = { props.currentTimeLine }
                    onChange        = { e => {
                        dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: props.audioRef.current.duration * (+e.target.value / props.duration) });
                        props.audioRef.current.currentTime = props.audioRef.current.duration * (+e.target.value / props.duration)
                    }}
                />
            </section>
        </div>
    </>
}

export default Time;