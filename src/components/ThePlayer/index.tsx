import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IThePlayer } from "./interface";
import { IStore } from "../../redux/interface.store";
import {
    PLAY,
    PAUSE,
    NEXT,
    PREV,
    TIMELINE_PLAY,
    TIMELINE_PAUSE,
    CHANGE_TIMELINE
} from "../../redux/actions";
import ControlButtons from "./ControlButtons";
import Time from "./Time";
import "./index.styl";

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);
    const dispatch = useDispatch();
    const [ interval, setIntervalState ] = useState(null);

    const { isPlay, isAutoPlay, currentTimeLine, currentTime, nowPlay } = useSelector((state: IStore) => {
        return {
            isPlay: state.isPlay,
            isAutoPlay: state.isAutoPlay,
            currentTimeLine: state.currentTimeLine,
            currentTime: state.currentTime,
            nowPlay: state.nowPlay
        }
    });

    function currentTimePlay() {
        setIntervalState(setInterval( () => {
            dispatch({ type: TIMELINE_PLAY });
        }, 1000 ));
    };

    function currentTimePause() {
        setIntervalState(clearInterval(interval));
        dispatch({ type: TIMELINE_PAUSE });
    };

    function playPause(isPlay: boolean): void {
        if( isPlay !== true  ) {
            dispatch({ type: PLAY });
            dispatch({ type: CHANGE_TIMELINE, currentTimeLine: audioRef.current.currentTime });
            currentTimePlay();
            audioRef.current.play();
        } else {
            currentTimePause();
            dispatch({ type: PAUSE });
            audioRef.current.pause();
        };
    };

    function nextPlay(): void {
        if(nowPlay < props.lengthData - 1) {
           currentTimePause();
            dispatch({ type: NEXT });
            dispatch({ type: CHANGE_TIMELINE, currentTimeLine: 0 });
            currentTimePlay(); 
        } else {
            dispatch({ type: "CHANGE_TRACK", nowPlay: 0 });
        };
    };

    function prevPlay(): void {
        if(nowPlay !== 0){
            currentTimePause();
            dispatch({ type: PREV });
            dispatch({ type: CHANGE_TIMELINE, currentTimeLine: 0 });
            currentTimePlay();
        } else {
            console.log("overflow");
        };
    };

    return <>
        <audio 
            src         = { props.audio }
            ref         = { audioRef }
            autoPlay    = { isAutoPlay }
            onEnded     = {() => {
                nextPlay();
            }}
        />
        <div id="ThePlayer">
            <ControlButtons 
                isPlay      = { isPlay }
                prevPlay    = { prevPlay }
                nextPlay    = { nextPlay }
                playPause   = { playPause }
                mainColor   = { props.mainColor }
                secondColor = { props.secondColor }
                thirdColor  = { props.thirdColor }
            />
            <Time 
                currentTime         = { currentTime }
                duration            = { props.duration }
                currentTimeLine     = { currentTimeLine }
                audioRef            = { audioRef }
                color               = { props.mainColor }
            />
        </div>
    </>
}

export default ThePlayer;