import React from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = "Frail State Of Mind"
            artist  = "The 1975"
        />
    </Layout>
}

export default IndexApp;