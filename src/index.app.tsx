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
}

const App: React.FunctionComponent<IApp> = ({ data, skins }) => {

    const nowPlay: number = useSelector((state: IStore) => state.nowPlay);

    const useImage = { backgroundImage: `url(${skins[data[nowPlay].skin_id].image})` };
    const useStandartColor = { backgroundColor: "#461027" };

    return <main style={ skins !== undefined ? useImage : useStandartColor }>
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
                mainColor       = { skins[data[nowPlay].skin_id].mainColor }
                secondColor     = { skins[data[nowPlay].skin_id].secondColor }
                thirdColor      = { skins[data[nowPlay].skin_id].thirdColor }
            />
        </Layout>
    </main>
}

export default App;