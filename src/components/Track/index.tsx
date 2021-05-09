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
                </div>
                <div className="track__artist">
                    <h3>
                        { track.artist }
                    </h3>
                </div>
                <div className="track__year">
                    <h3>
                        { track.year }
                    </h3>
                </div>
                <div className="track__time">
                    <h3>
                        2:20
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