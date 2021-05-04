import React from "react";

import TheTitlebar from "../components/TheTitlebar";
import ThePlayer from "../components/ThePlayer";
import Track from "../components/Track";

import { ITrack } from "../types";

const Index: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <>
        <main id="app">
            <TheTitlebar />
            <ThePlayer />
            {
                data.map( (track, id) => {
                    return <Track key={id} />
                } )
            }
        </main>
    </>
}

export default Index;