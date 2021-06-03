import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IThePlayer } from "./interface";
import { IStore } from "../../redux/interface.store";
import {
    PLAY, PAUSE, NEXT,
    PREV, TIMELINE_PLAY,
    TIMELINE_PAUSE,
    CHANGE_TIMELINE,
    CHANGE_TRACK
} from "../../redux/actions";
import TheTracklist from "../TheTracklist";
import ControlButtons from "./ControlButtons";
import Time from "./Time";
import "./index.styl";


/**
 * 
 * The Player component.
 * The most important component.
 * The component responsible for playing music, switching it.
 * 
 * @function
 * @component
 * 
 * @param {Object} props ReactJS props. See interface for more info.
 * 
 * @returns {React.FunctionComponent | React.FC}
 * 
*/

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    /**
     * 
     * Ref for audio tag. 
     * 
     * @name audioRef
     * 
    */
    const audioRef = useRef(null);

    /**
     * 
     * React/Redux function for change global redux state 
     * 
     * @hook dispatch
     * 
    */
    const dispatch = useDispatch();

    /**
     * 
     * React local state.
     * 
    */
    const [ interval, setIntervalState ] = useState(null);

    /**
     * 
     * React/Redux function for get global redux state
     * 
    */
    const { isPlay, isAutoPlay, currentTimeLine, currentTime, nowPlay, isTracklist } = useSelector((state: IStore) => {
        return {
            isPlay: state.isPlay,
            isAutoPlay: state.isAutoPlay,
            currentTimeLine: state.currentTimeLine,
            currentTime: state.currentTime,
            nowPlay: state.nowPlay,
            isTracklist: state.isTracklist
        }
    });

    /**
     * 
     * Function responsible for timeline changes
     * Use useState react hook for play/pause setInterval
     * 
     * @function currentTimePlay
     * @method
     * 
     * @returns {void}
     * 
     * @example currentTimePlay()
     * 
    */
    function currentTimePlay() {
        setIntervalState(setInterval( () => {
            dispatch({ type: TIMELINE_PLAY });
        }, 1000 ));
    };

    /**
     * 
     * Function responsible for timeline changes
     * Use useState react hook for play/pause setInterval
     * 
     * @function currentTimePause
     * @method
     * 
     * @returns {void}
     * 
     * @example currentTimePause()
     * 
    */
    function currentTimePause() {
        setIntervalState(clearInterval(interval));
        dispatch({ type: TIMELINE_PAUSE });
    };

    /**
     * 
     * Function responsible for play/pause music
     * Use dispatch hook for change global state
     * 
     * 
     * @function playPause
     * @method 
     * 
     * @returns {void}
     * 
     * @example playPause(true)
     * 
    */
    function playPause(isPlay: boolean): void {
        if(isPlay !== true) {
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

    /**
     * 
     * Function responsible for change now play music
     * Use dispatch hook for change global state
     * 
     * Change nowPlay state field (+1)
     * 
     * 
     * @function nextPlay
     * @method 
     * 
     * @returns {void}
     * 
     * @example nextPlay()
     * 
    */
    function nextPlay(): void {
        if(nowPlay < props.lengthData - 1) {
            currentTimePause();
            dispatch({ type: NEXT });
            dispatch({ type: CHANGE_TIMELINE, currentTimeLine: 0 });
            currentTimePlay(); 
        } else {
            dispatch({ type: CHANGE_TRACK, nowPlay: 0 });
        };
    };

    /**
     * 
     * Function responsible for change now play music
     * Use dispatch hook for change global state
     * 
     * Change nowPlay state field (-1)
     * 
     * 
     * @function prevPlay
     * @method 
     * 
     * @returns {void}
     * 
     * @example prevPlay()
     * 
    */
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

    /**
     * 
     * Function responsible for change now play music
     * Use dispatch hook for change global state
     * 
     * Change nowPlay state field (any number)
     * 
     * Used only in the component "TheTracklist"
     * 
     * 
     * @function prevPlay
     * @method 
     * 
     * @returns {void}
     * 
     * @example setPlayFromTheTracklist(10)
     * 
    */
    function setPlayFromTheTracklist(newPlay: number): void {
        currentTimePause();
        dispatch({ type: CHANGE_TRACK, nowPlay: newPlay });
        dispatch({ type: PLAY });
        dispatch({ type: CHANGE_TIMELINE, currentTimeLine: 0 });
        currentTimePlay(); 
    }

    return <>
        <audio 
            src         = { props.audio }
            ref         = { audioRef }
            autoPlay    = { isAutoPlay }
            onEnded     = {() => {
                nextPlay();
            }}
        />
        <div id="ThePlayer" style={{ opacity: isTracklist ? "0" : "1" }}>
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
        {
            isTracklist && <TheTracklist 
                data={props.data} 
                setPlayFromTheTracklist={setPlayFromTheTracklist}
                mainColor={props.mainColor}
            />
        }
    </>
}

export default ThePlayer;