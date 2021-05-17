import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_TIMELINE } from "../../../redux/actions";
import formatTime from "../../../utils/formatTime";
import { ITimeElement } from "./interface";
import "./index.styl";

const Time: React.FunctionComponent<ITimeElement> = (props) => {

    const rangeRef = useRef(null);
    const dispatch = useDispatch();

    let valueLine = (props.currentTimeLine * 100) / props.duration;
    let gradient = `-webkit-linear-gradient(left, ${props.color} 0%, ${props.color} ${valueLine}%, #fff ${valueLine}%, #fff 100%)`;

    function onChangeTimeLine(e: any) {
        dispatch({ type: CHANGE_TIMELINE, currentTimeLine: props.audioRef.current.duration * (+e.target.value / props.duration) });
        props.audioRef.current.currentTime = props.audioRef.current.duration * (+e.target.value / props.duration);
    };

    return <>
        <div id="ThePlayer__timer" style={{ borderTop: `4px solid ${props.color}` }}>
            <section>
                <input 
                    id              = "ThePlayer__timeline"
                    ref             = { rangeRef }
                    type            = "range" 
                    min             = "0" 
                    max             = { props.duration } 
                    step            = "any"
                    value           = { props.currentTimeLine }
                    onChange        = {(e) => { onChangeTimeLine(e) }}
                    style={{ background: gradient }}
                />
                <div id="ThePlayer__time">
                    <h2 style={{ color: props.color }}>
                        { formatTime(props.currentTime) }
                    </h2>
                    <h2>
                        { formatTime(props.duration) }
                    </h2>
                </div>
            </section>
        </div>
    </>
}

export default Time;