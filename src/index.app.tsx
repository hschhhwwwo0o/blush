import React from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = { data[0].title }
            artist  = { data[0].artist }
        />
        <ThePlayer />
    </Layout>
}

export default IndexApp;