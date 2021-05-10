import React from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {
    return <Layout>
        <h1>hi</h1>
    </Layout>
}

export default IndexApp;