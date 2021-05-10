import React from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <Layout>
        <TheTitleBar />
    </Layout>
}

export default IndexApp;