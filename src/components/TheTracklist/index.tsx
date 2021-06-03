import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import { ITheTracklist } from "./interface";
import "./index.styl";

/**
 * 
 * Tracklist music component. Absolute postion width: 100vw, height: 100vh
 * 
 * @param data Array of music
 * @param setPlayFromTheTracklist Function for changing music. Accepts in itself "nowPlay"
 * @param mainColor Color title current song
 * 
 * @returns {JSX} JSX Component
 * 
*/

const TheTracklist: React.FunctionComponent<ITheTracklist> = ({ data, setPlayFromTheTracklist, mainColor }) => {
    const { nowPlay } = useSelector((store: IStore) => {
        return {
            nowPlay: store.nowPlay,
        };
    });
    const selected = { color: mainColor, marginLeft: "20px" };
    return <>
        <div id="theTracklist">
            {
                data.map(({ title, artist }, index) => {
                    return <h1 onClick={() => { setPlayFromTheTracklist(index) }} key={`${index}`} style={ nowPlay === index ? selected : {} }>
                        { title } - <span> { artist }</span>
                    </h1>
                })
            }
        </div>
    </>
}

export default TheTracklist;