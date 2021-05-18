import React from "react";
import { useSelector } from "react-redux";

import { ITrack, ISkin } from "./types";

import Layout from "./layout/index";

import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

const IndexApp: React.FunctionComponent<{ data: ITrack[], skins?: ISkin[] }> = ({ data, skins }) => {

    const nowPlay: number = useSelector((state: any) => state.nowPlay);

    return <main style={{ backgroundImage: `url(${skins[data[nowPlay].skin_id].image})` }}>
        <Layout>
            <TheTitleBar />
            <TheMeta 
                title       = {data[nowPlay].title}
                artist      = {data[nowPlay].artist}
                mainColor   = {skins[data[nowPlay].skin_id].mainColor}
            />
            <ThePlayer 
                audio           = { data[nowPlay].url }
                lengthData      = { data.length }
                duration        = { data[nowPlay].duration }
                mainColor       = { skins[data[nowPlay].skin_id].mainColor }
                secondColor     = { skins[data[nowPlay].skin_id].secondColor }
                thirdColor      = { skins[data[nowPlay].skin_id].thirdColor }
            />
        </Layout>
    </main>
}

export default IndexApp;