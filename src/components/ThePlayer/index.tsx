import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import formatTime from "../../utils/formatTime";
import PlayPauseSVG from "./PlayPauseSVG";
import { IThePlayer } from "./interface";

import "./index.styl";

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

    function playPause(isPlay: boolean): void {
        if( isPlay !== true  ) {
            dispatch({ type: "PLAY" });
            dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: audioRef.current.currentTime });
            currentTimePlay();
            audioRef.current.play();
        } else {
            dispatch({ type: "PAUSE" });
            currentTimePause();
            audioRef.current.pause();
        }
    }

    function nextPlay(): void {
        currentTimePause();
        dispatch({ type: "NEXT" });
        dispatch({ type: "PLAY" });
        dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: 0 });
        currentTimePlay();
    }

    function prevPlay(): void {
        currentTimePause();
        dispatch({ type: "NEXT" });
        dispatch({ type: "PLAY" });
        dispatch({ type: "CHANGE_TIMELINE", currentTimeLine: 0 });
        currentTimePlay();
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
                <div id="ThePlayer__empty" />
                <div id = "ThePlayer__play" onClick = {() => {
                    playPause(isPlay);
                }}>
                    <PlayPauseSVG isPlay={ isPlay } />
                </div>
                <div id="ThePlayer__prev" onClick={ prevPlay }>
                    <div />
                </div>
                <div id="ThePlayer__next" onClick={ nextPlay }>
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