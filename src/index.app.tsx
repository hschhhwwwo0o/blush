import React from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = { data[0].title }
            artist  = { data[0].artist }
        />
    </Layout>
}

export default IndexApp;