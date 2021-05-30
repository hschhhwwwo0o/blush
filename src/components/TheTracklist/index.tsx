import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import { ITheTracklist } from "./interface";
import "./index.styl";

const TheTracklist: React.FunctionComponent<ITheTracklist> = ({ data }) => {

    const { nowPlay } = useSelector((store: IStore) => {
        return {
            nowPlay: store.nowPlay,
        };
    });

    return <>
        <div id="theTracklist">
            {
                data.map(({ title, artist }, index) => {
                    return <h1 key={`${title} - ${artist}. ${index}`}>
                        { title } - <span> { artist }</span>
                    </h1>
                })
            }
        </div>
    </>
}

export default TheTracklist;