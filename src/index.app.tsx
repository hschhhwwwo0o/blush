import React, { useState } from "react";
import Layout from "./layout/index";

import { ITrack } from "./types";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

const IndexApp: React.FunctionComponent<{ data: ITrack[] }> = ({ data }) => {

    const [ nowPlay, changeNowPlay ] = useState(0);
    const [ isPlay, setIsPlay ] = useState(false);

    return <Layout>
        <TheTitleBar />
        <TheMeta 
            title   = { data[nowPlay].title }
            artist  = { data[nowPlay].artist }
        />
        <ThePlayer 
            isPlay          = { isPlay }
            setIsPlay       = { setIsPlay }
            nowPlay         = { nowPlay }
            changeNowPlay   = { changeNowPlay }
            audio           = { data[nowPlay].url }
            len             = { data.length }
            dur             = { data[nowPlay].duration }
        />
    </Layout>
}

export default IndexApp;