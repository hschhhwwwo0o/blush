import React from "react";
import { useSelector } from "react-redux";

import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {

    const nowPlay: number = useSelector((state: any) => state.nowPlay);

    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = { data[nowPlay].title }
            artist  = { data[nowPlay].artist }
        />
        <ThePlayer 
            audio           = { data[nowPlay].url }
            lengthData      = { data.length }
            duration        = { data[nowPlay].duration }
        />
    </Layout>
}

export default IndexApp;