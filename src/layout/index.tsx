import React from "react";

import TheTitlebar from "../components/TheTitlebar";
import ThePlayer from "../components/ThePlayer";
import TheMusicGrid from "../components/TheMusicGrid";
import Track from "../components/Track";

import { ITrack } from "../types";

const Index: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <>
        <main id="app">
            <TheTitlebar />
            <ThePlayer 
                cover   = { data[0].cover }
                title   = { data[0].title }
                artist  = { data[0].artist }
            />
            <TheMusicGrid>
                {
                    data.map( (track, id) => {
                        return <Track 
                            url         = { track.url }
                            artist      = { track.artist }
                            album       = { track.album }
                            duration    = { track.duration }
                            title       = { track.title }
                            key         = { id } 
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