import React from "react";
import { useSelector } from "react-redux";

import Layout from "./layout/index";
import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";

import { ITrack, ISkin } from "./types";
import { IStore } from "./redux/interface.store";

interface IApp {
    data: ITrack[]
    skins?: ISkin[] | undefined
    online?: boolean
}

const App: React.FunctionComponent<IApp> = ({ data, skins, online }) => {

    const nowPlay: number = useSelector((state: IStore) => state.nowPlay);

    function getSkin(nowPlay: number): ISkin {
        return skins[data[nowPlay].skin_id];
    };

    const useImage = { backgroundImage: `url(${getSkin(nowPlay).image})` };
    const useStandartColor = { backgroundColor: "#461027" };

    return <main style={ online ? useImage : useStandartColor }>
        <Layout>
            <TheTitleBar />
            <TheMeta 
                title       = { data[nowPlay].title }
                artist      = { data[nowPlay].artist }
                mainColor   = { skins[data[nowPlay].skin_id].mainColor }
            />
            <ThePlayer 
                audio           = { data[nowPlay].url }
                lengthData      = { data.length }
                duration        = { data[nowPlay].duration }
                mainColor       = { getSkin(nowPlay).mainColor }
                secondColor     = { getSkin(nowPlay).secondColor }
                thirdColor      = { getSkin(nowPlay).thirdColor }
            />
        </Layout>
    </main>
};

export default App;