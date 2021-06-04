import React from "react";
import { useSelector } from "react-redux";
import { ITrack, ISkin } from "./types";
import { IStore, IStoreSample } from "./redux/interface.store";
import NotFound from "./components/NotFound";
import Layout from "./layout/index";
import TheTitleBar from "./components/TheTitleBar/index";
import TheMeta from "./components/TheMeta";
import ThePlayer from "./components/ThePlayer";
import BG from "./components/BG";

/**
 * 
 * Interface for app
 * 
 * @interface 
 * 
*/
interface IApp {
    data: ITrack[]
    skins?: ISkin[] | undefined
    online?: boolean
}

/**
 * 
 * JSX App component
 * 
 * @component
 * 
 * @param {Array} data ITrack[]. Array music
 * @param {Array} skins ISkin[]. Array skins
 * @param {boolean} online Online/Offline status
 * 
 * @returns {React.FunctionComponent}
 */
const App: React.FunctionComponent<IApp> = ({ data, skins, online }) => {

    /**
     * 
     * React/Redux function for get global redux state
     * Get nowPlay: number field for music play
     * 
     */
    const { nowPlay }: IStoreSample = useSelector((state: IStore) => {
        return {
            nowPlay: state.nowPlay
        }
    });

    /**
     * 
     * Returns the skin for the current track 
     * 
     * @param {number} nowPlay Current track 
     * 
     * @returns {ISkin} Return Skin Object
     * 
     */
    function getSkin(nowPlay: number): ISkin {
        return skins[data[nowPlay].skin_id];
    };

    /**
     * 
     * Returns the skin for the current track 
     * 
     * @param {number} nowPlay Current track 
     * 
     * @returns {ITrack} Return Track Object
     * 
     */
    function getTrack(nowPlay: number): ITrack {
        return data[nowPlay];
    };

    return <Layout>
        {
            data.length !== 0 && <>
                <TheTitleBar />
                <section>
                    <TheMeta 
                        title       = { getTrack(nowPlay).title }
                        artist      = { getTrack(nowPlay).artist }
                        mainColor   = { getSkin(nowPlay).mainColor }
                    />
                    <ThePlayer 
                        data            = { data }
                        audio           = { getTrack(nowPlay).url }
                        lengthData      = { data.length }
                        duration        = { getTrack(nowPlay).duration }
                        mainColor       = { getSkin(nowPlay).mainColor }
                        secondColor     = { getSkin(nowPlay).secondColor }
                        thirdColor      = { getSkin(nowPlay).thirdColor }
                    />
                </section>
                <BG online={online} image={getSkin(nowPlay).image} />
            </>
        }
        {
            data.length === 0 && <NotFound />
        }
    </Layout>
};

export default App;