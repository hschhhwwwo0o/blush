import React, { useState } from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import { useSelector, useDispatch } from 'react-redux'

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {

    const nowPlay: number = useSelector( (state: any) => state.nowPlay);

    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = { data[nowPlay].title }
            artist  = { data[nowPlay].artist }
        />
        <ThePlayer 
            audio           = { data[nowPlay].url }
            len             = { data.length }
            dur             = { data[nowPlay].duration }
        />
    </Layout>
}

export default IndexApp;