import React, { useRef, useState } from "react";
import "./index.styl";

interface IThePlayer {
    nowPlay: any
    changeNowPlay: any
    audio: any
    len: any
    isPlay: any
    setIsPlay: any
}

const ThePlayer:React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);

    const len = props.len - 1;

    const [ autoplay, setautoplay] = useState(false);
    const [ valueDuration, seValueDuration] = useState(0);

    function __next() {
        if( props.nowPlay === len ) {
            props.changeNowPlay(0)
        } else {
            props.changeNowPlay(props.nowPlay + 1)
        }
    }

    function __prev() {
        if( props.nowPlay === 0 ) {
            props.changeNowPlay(0)
        } else {
            props.changeNowPlay( props.nowPlay - 1 )
        }
    }

    function __play() {
        if( props.isPlay === true ) {
            audioRef.current.pause();
            props.setIsPlay(false);
        } else {
            audioRef.current.play();
            props.setIsPlay(true);
        }
        
        setautoplay(true);
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
                        <h2>0:00</h2>
                        <h2>4:20</h2>
                    </div>
                    <input 
                        id              = "ThePlayer__timeline"
                        type            = "range" 
                        min             = "0" 
                        max             = "100" 
                        value           = { valueDuration }
                        onChange        = { e => {
                            if( +e.target.value === 100 ) {
                                seValueDuration(0)
                            } else {
                                seValueDuration(+e.target.value)
                            }
                            
                            audioRef.current.currentTime = audioRef.current.duration * (+e.target.value / 100)
                        } }
                    />
                </section>
            </div>
        </div>
    </>
}

export default ThePlayer;