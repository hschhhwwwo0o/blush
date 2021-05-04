import React from "react";
import { ITrack } from "../../types";

const Track: React.FunctionComponent<ITrack> = (track) => {
    return <>
        <div className="track">
            <div className="track__left">
                <div className="track__cover">
                    <img 
                        src={ track.cover } 
                        alt="cover"
                    />
                    <div className="track__block"></div>
                </div>
                <div className="track__meta">
                    <h3>
                        { track.title }
                    </h3>
                    <h4>
                        { track.artist }
                    </h4>
                </div>
            </div>
            <div className="track__right">
                <div className="track__more">
                    
                </div>
            </div>
        </div>
    </>
}

export default Track;