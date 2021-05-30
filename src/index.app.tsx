import React from "react";
import { useSelector } from "react-redux";
import { ITrack, ISkin } from "./types";
import { IStore, IStoreSample } from "./redux/interface.store";
import Layout from "./layout/index";
import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";
import BG from "./components/BG";

interface IApp {
    data: ITrack[]
    skins?: ISkin[] | undefined
    online?: boolean
}

const App: React.FunctionComponent<IApp> = ({ data, skins, online }) => {

    const { nowPlay, isTracklist }: IStoreSample = useSelector((state: IStore) => {
        return {
            nowPlay: state.nowPlay,
            isTracklist: state.isTracklist
        }
    });

    function getSkin(nowPlay: number): ISkin {
        return skins[data[nowPlay].skin_id];
    };

    function getTrack(nowPlay: number): ITrack {
        return data[nowPlay];
    };

    return <Layout>
        <TheTitleBar />
        <section style={{ opacity: isTracklist ? "0" : "1" }}>
            <TheMeta 
                title       = { getTrack(nowPlay).title }
                artist      = { getTrack(nowPlay).artist }
                mainColor   = { getSkin(nowPlay).mainColor }
            />
            <ThePlayer 
                audio           = { getTrack(nowPlay).url }
                lengthData      = { data.length }
                duration        = { getTrack(nowPlay).duration }
                mainColor       = { getSkin(nowPlay).mainColor }
                secondColor     = { getSkin(nowPlay).secondColor }
                thirdColor      = { getSkin(nowPlay).thirdColor }
            />
        </section>
        <BG 
            online  = { online } 
            image   = { getSkin(nowPlay).image } 
        />
    </Layout>
};

export default App;