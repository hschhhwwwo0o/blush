import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import { ITheTracklist } from "./interface";
import "./index.styl";

/**
 * 
 * Tracklist music component. Absolute postion width: 100vw, height: 100vh
 * 
 * @function
 * @component
 * 
 * @param {Array} data Array of music
 * @param {Function} setPlayFromTheTracklist Function for changing music. Accepts in itself "nowPlay"
 * @param {string} mainColor Color title current song
 * 
 * @returns {React.FunctionComponent | React.FC} JSX Component
 * 
 */
const TheTracklist: React.FunctionComponent<ITheTracklist> = ({ data, setPlayFromTheTracklist, mainColor }) => {

    /**
     * 
     * Get nowPlay value from global redux state
     * 
     */
    const { nowPlay, isTracklist } = useSelector((store: IStore) => {
        return {
            nowPlay: store.nowPlay,
            isTracklist: store.isTracklist
        };
    });

    /**
     * Styles object
     * 
     * @namespace {Object} selected Styles object
     * 
     */
    const selected = { color: mainColor, marginLeft: "20px" };

    return <>
        <div id="theTracklist" className={isTracklist ? "openTracklist" : "closeTracklist"}>
            {
                data.map(({ title, artist }, index) => {
                    return <h1 onClick={() => { setPlayFromTheTracklist(index) }} style={nowPlay === index ? selected : {}} key={`${index}`}>
                        {title} - <span> {artist}</span>
                    </h1>
                })
            }
        </div>
    </>
}

export default TheTracklist;