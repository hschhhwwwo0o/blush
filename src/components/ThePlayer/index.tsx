import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IThePlayer } from "./interface";
import { IStore } from "../../redux/interface.store";

import ControlButtons from "./ControlButtons";
import Time from "./Time";

import "./index.styl";

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);

    const dispatch = useDispatch();

    const { isPlay, isAutoPlay, currentTimeLine, currentTime } = useSelector((state: IStore) => {
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
            <ControlButtons 
                isPlay      = { isPlay }
                prevPlay    = { prevPlay }
                nextPlay    = { nextPlay }
                playPause   = { playPause }
            />
            <Time 
                currentTime         = { currentTime }
                duration            = { props.duration }
                currentTimeLine     = { currentTimeLine }
                audioRef            = { audioRef }
            />
        </div>
    </>
}

export default ThePlayer;