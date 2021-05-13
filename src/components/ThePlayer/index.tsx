import React, { useRef, useState } from "react";
import formatTime from "../../utils/formatTime";
import "./index.styl";

import { useSelector, useDispatch } from "react-redux"

interface IThePlayer {
    nowPlay?: any
    changeNowPlay?: any
    audio?: any
    len?: any
    isPlay?: any
    setIsPlay?: any
    dur?: any
}

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);
    const rangeRef = useRef(null);

    const dispatch = useDispatch();

    const { isPlay, isAutoPlay, currentTimeLine, currentTime } = useSelector((state: any) => {
        return {
            isPlay: state.isPlay,
            isAutoPlay: state.isAutoPlay,
            currentTimeLine: state.currentTimeLine,
            currentTime: state.currentTime
        }
    });

    const [ interval, setIntervalState ] = useState(null);

    function currentTimePlay() {
        setIntervalState(setInterval( () => {
            dispatch({ type: "TIMELINE_PLAY" });
        }, 1000 ))
    }

    function currentTimePause() {
        setIntervalState(clearInterval(interval))
        dispatch({ type: "TIMELINE_PAUSE" });
    }

    return <>
        <audio 
            src         = { props.audio }
            ref         = { audioRef }
            autoPlay    = { isAutoPlay }
            onEnded     = { () => {
                dispatch({ type: "NEXT" });
            } }
        />
        <div id="ThePlayer">
            <div id="ThePlayer__controls">
                <div id="ThePlayer__empty"></div>
                <div 
                    id          = "ThePlayer__play"
                    className   = { !isPlay ? "play" : "pause" }
                    onClick     = {() => {

                    if( isPlay !== true  ) {
                        dispatch({ type: "PLAY" });
                        dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: audioRef.current.currentTime });
                        currentTimePlay();
                        audioRef.current.play();
                    } else {
                        dispatch({ type: "PAUSE" });
                        currentTimePause()
                        audioRef.current.pause();
                    } 
                }}>
                    <div />
                </div>
                <div 
                    id="ThePlayer__prev" 
                    onClick={ () => {
                        dispatch({ type: "PREV" });
                    }}
                >
                    <div />
                </div>
                <div 
                    id="ThePlayer__next" 
                    onClick={ () => {
                        dispatch({ type: "NEXT" });
                    }}
                >
                    <div />
                </div>
            </div>
            <div id="ThePlayer__timer">
                <section>
                    <div id="ThePlayer__time">
                        <h2>
                            { formatTime(currentTime) }
                        </h2>
                        <h2>
                            { formatTime(props.dur) }
                        </h2>
                    </div>
                    <input 
                        id              = "ThePlayer__timeline"
                        ref             = { rangeRef }
                        type            = "range" 
                        min             = "0" 
                        max             = { props.dur } 
                        step            = "any"
                        value           = { currentTimeLine }
                        onChange        = { e => {
                            dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: audioRef.current.duration * (+e.target.value / props.dur) });
                            audioRef.current.currentTime = audioRef.current.duration * (+e.target.value / props.dur)
                        } }
                    />
                </section>
            </div>
        </div>
    </>
}

export default ThePlayer;