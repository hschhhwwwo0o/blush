import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Time: React.FunctionComponent<any> = (props) => {

    const rangeRef = useRef(null);
    const dispatch = useDispatch();

    return <>
        <div id="ThePlayer__timer">
            <section>
                <div id="ThePlayer__time">
                    <h2>
                        { props.currentTime }
                    </h2>
                    <h2>
                        { props.duration }
                    </h2>
                </div>
                <input 
                    id              = "ThePlayer__timeline"
                    ref             = { rangeRef }
                    type            = "range" 
                    min             = "0" 
                    max             = { props.dur } 
                    step            = "any"
                    value           = { props.currentTimeLine }
                    onChange        = { e => {
                        dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: props.audioRef.current.duration * (+e.target.value / props.dur) });
                        props.audioRef.current.currentTime = props.audioRef.current.duration * (+e.target.value / props.dur)
                    } }
                />
            </section>
        </div>
    </>
}

export default Time;