import React, { useState } from "react";

import TheTitlebar from "../components/TheTitlebar";
import ThePlayer from "../components/ThePlayer";
import TheMusicGrid from "../components/TheMusicGrid";
import Track from "../components/Track";

import { ITrack } from "../types";

const Index: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {

    const [ now, setNow ] = useState(0);

    const [ autoplay, setAutoplay ] = useState(false);

    return <>
        <main id="app">
            <TheTitlebar />
            <ThePlayer 
                cover       = { data[now].cover }
                title       = { data[now].title }
                artist      = { data[now].artist }
                audio       = { data[now].url }
                
                now         = { now }
                setNow      = { setNow }
                autoplay    = { autoplay }
                setAutoplay = { setAutoplay }
                len         = { data.length }
            />
            <TheMusicGrid>
                {
                    data.map( (track, id) => {
                        return <Track 
                            id          = { id }
                            key         = { id } 

                            setNow      = { setNow }
                            setAutoplay = { setAutoplay }

                            url         = { track.url }
                            artist      = { track.artist }
                            album       = { track.album }
                            duration    = { track.duration }
                            title       = { track.title }
                            year        = { track.year }
                            cover       = { track.cover }
                        />
                    } )
                }
            </TheMusicGrid>
        </main>
    </>
}

export default Index;