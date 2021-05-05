import React from "react";

interface IThePlayer {
    cover?: any
    title?: string
    artist?: string
    audio?: string
}

const ThePlayer: React.FunctionComponent<IThePlayer> = (props) => {
    return <>
        <div id="player-container">
            <div id="player">
                <div id="prev" className="button">
                    <div></div>
                </div>
                <div id="play" className="button">
                    <div></div>
                </div>
                <div id="next" className="button">
                    <div></div>
                </div>
                <div id="shuffle" className="button">
                    <div></div>
                </div>
                <div id="loop" className="button">
                    <div></div>
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