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
    const [ valueDuration, seValueDuration] = useState(0);
    const [ intervalID, setIntervalID] = useState(null);

    function __next() {
        if( props.nowPlay === len ) {
            props.changeNowPlay(0)
        } else {
            props.changeNowPlay(props.nowPlay + 1)
        }

        seValueDuration(0)
        clearInterval(undefined)
    }

    function __prev() {
        if( props.nowPlay === 0 ) {
            props.changeNowPlay(0);
        } else {
            props.changeNowPlay( props.nowPlay - 1 )
        }

        setautoplay(true);
        seValueDuration(0)
        clearInterval(undefined)
    }

    function __play() {
        if( props.isPlay === true ) {
            audioRef.current.pause();
            props.setIsPlay(false);
            setautoplay(false);

            clearInterval(intervalID)
        } else {
            audioRef.current.play();
            props.setIsPlay(true);
            setautoplay(true);

            setIntervalID( setInterval( () => {
                // rangeRef.current.value = Number.parseInt(rangeRef.current.value) + 1
                // setRange(Number.parseInt(rangeRef.current.value) + 1)
                // console.log(rangeRef.current.value)
                seValueDuration(Number.parseInt(rangeRef.current.value) + 1)
                console.log(audioRef.current.duration)
            }, 1000 ) )
        }
        
    }

    setTimeout( () => {
        console.log(audioRef.current.duration)
    }, 2000 )

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
                        <h2>0:00</h2>
                        <h2>{ formatTime(props.dur) }</h2>
                    </div>
                    <input 
                        id              = "ThePlayer__timeline"
                        ref             = { rangeRef }
                        type            = "range" 
                        min             = "0" 
                        max             = { props.dur } 
                        step            = "any"
                        value           = { valueDuration }
                        onChange        = { e => {
                            if( +e.target.value === props.dur ) {
                                seValueDuration(0)
                            } else {
                                seValueDuration(+e.target.value)
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