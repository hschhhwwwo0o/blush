import React, { useRef, useState } from "react";

interface IThePlayer {
    cover?: any
    title?: string
    artist?: string
    audio?: string
    setNow: any
    now: number
    len?: number
    autoplay?: boolean
    setAutoplay?: any

    play?: boolean
    setPlay?: any
}

const ThePlayer: React.FunctionComponent<IThePlayer> = (props) => {

    const audioRef = useRef(null);

    const [ loop, setLoop ] = useState(false);

    const len = props.len - 1;

    function __next() {
        if( props.now === len ) {
            props.setNow(0)
        } else {
            props.setNow(props.now + 1)
        }
        
        props.setPlay(true)
        props.setAutoplay(true)
    }

    function __prev() {
        if( props.now === 0 ) {
            props.setNow(0)
        } else {
            props.setNow(props.now - 1)
        }

        props.setPlay(true)
        props.setAutoplay(true)
    }

    function __play() {
        if( props.play === false ) {
            audioRef.current.play();
            props.setPlay(true);

            console.log(audioRef)
        } else {
            audioRef.current.pause();
            props.setPlay(false);
        }
    }

    function __loop() {
        setLoop(!loop)
        props.setAutoplay(true)
    }

    return <>
        <audio 
            src         = { props.audio } 
            autoPlay    = { props.autoplay } 
            loop        = { loop }
            ref         = { audioRef }
            onEnded     = { () => {
                console.log("Ended");
                __next();
            } }
        />
        <div id="player-container">
            <div id="player">
                <div 
                    id          = "prev" 
                    className   = "button"
                    onClick     = { __prev }
                >
                    <div />
                </div>
                <div 
                    className   = { props.play ? "button play" : "button pause" }
                    onClick     = { __play }
                >
                    <div />
                </div>
                <div 
                    id          = "next" 
                    className   = "button"
                    onClick     = { __next }
                >
                    <div />
                </div>
                <div 
                    id          = "shuffle" 
                    className   = "button"
                >
                    <div />
                </div>
                <div 
                    id          = "loop" 
                    className   = "button"
                    onClick     = { __loop }
                    style       = {{ border: `2px solid ${ loop ? "black" : "white" }` }}
                >
                    <div />
                </div>
                <div id="player__tekm">
                    <div id="player__cover">
                        <img src={ props.cover } alt=""/>
                    </div>
                    <div id="player__meta">
                        <h3>{ props.title }</h3>
                        <h4>{ props.artist }</h4>
                    </div>
                </div>
                <div id="player__more">
                    <div></div>
                </div>
            </div>
        </div>
    </>
}

export default ThePlayer;