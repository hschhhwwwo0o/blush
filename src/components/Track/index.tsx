import React from "react";
import { ITrack } from "../../types";

const Track: React.FunctionComponent<ITrack> = (track) => {
    return <>
        <div 
            className="track" 
            onClick={ () => {
                track.setNow(track.id);
                console.log(track.setPlay);
                
                track.setPlay(true);
                track.setAutoplay(true);
            } } 
        >
            <div className="track__cover">
                <img src={ track.cover } alt=""/>
            </div>
            <div className="track__meta-body">
                <div className="track__title">
                    <h3 className="track__name">
                        { track.title }
                    </h3>
                    <h4 className="track__album">
                        { track.album }
                    </h4>
                </div>
                <div className="track__artist">
                    <h3>
                        { track.artist }
                    </h3>
                </div>
            </div>
            <div className="track__more">
                <div></div>
            </div>
        </div>
    </>
}

export default Track;