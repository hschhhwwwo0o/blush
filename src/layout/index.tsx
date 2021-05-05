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
            <ThePlayer />
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