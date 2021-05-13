import React, { useRef, useState } from "react";
import formatTime from "../../utils/formatTime";
import "./index.styl";

interface IThePlayer {
    nowPlay: any
    changeNowPlay: any
    audio: any
    len: any
    isPlay: any
    setIsPlay: any
    dur: any
}

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);
    const rangeRef = useRef(null);

    const len = props.len - 1;

    const [ autoplay, setautoplay] = useState(false);
    const [ currentTimeLine, setCurrentTimeLine] = useState(0);
    const [ intervalID, setIntervalID] = useState(null);
    const [ currentTime, setCurrentTime] = useState("0:00");

    function __next() {
        if( props.nowPlay === len ) {
            props.changeNowPlay(0)
        } else {
            props.changeNowPlay(props.nowPlay + 1)
        }

        setCurrentTimeLine(0)
        clearInterval(undefined)
    }

    function __prev() {
        clearInterval(undefined);
        setCurrentTimeLine(0);
        if(props.nowPlay === 0) {
            props.changeNowPlay(0);
        } else {
            props.changeNowPlay( props.nowPlay - 1 )
        }

        setautoplay(true);
    }

    function __play() {
        if( props.isPlay === true ) {
            clearInterval(intervalID)
            audioRef.current.pause();
            props.setIsPlay(false);
            setautoplay(false);
        } else {
            audioRef.current.play();
            props.setIsPlay(true);
            setautoplay(true);

            setIntervalID( setInterval( () => {
                setCurrentTimeLine(Number.parseInt(rangeRef.current.value) + 1)
                setCurrentTime(formatTime(audioRef.current.currentTime));
            }, 1000 ) )
        }
    }

    return <>
        <audio 
            src         = { props.audio }
            ref         = { audioRef }
            autoPlay    = { autoplay }
            onEnded     = { () => {
                __next();
            } }
        />
        <div id="ThePlayer">
            <div id="ThePlayer__controls">
                <div id="ThePlayer__empty"></div>
                <div id="ThePlayer__play" onClick={ __play } className={ !props.isPlay ? "play" : "pause" }>
                    <div />
                </div>
                <div id="ThePlayer__prev" onClick={ __prev }>
                    <div />
                </div>
                <div id="ThePlayer__next" onClick={ __next }>
                    <div />
                </div>
            </div>
            <div id="ThePlayer__timer">
                <section>
                    <div id="ThePlayer__time">
                        <h2>{ currentTime }</h2>
                        <h2>{ formatTime(props.dur) }</h2>
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
                            if( +e.target.value === props.dur ) {
                                setCurrentTimeLine(0)
                            } else {
                                setCurrentTimeLine(+e.target.value)
                            }
                            
                            audioRef.current.currentTime = audioRef.current.duration * (+e.target.value / props.dur)
                        } }
                    />
                </section>
            </div>
        </div>
    </>
}

export default ThePlayer;