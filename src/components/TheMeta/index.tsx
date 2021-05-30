import React from "react";
import { ITheMeta } from "./interface";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import "./index.styl";

const TheMeta: React.FunctionComponent<ITheMeta> = ({ title, artist, mainColor }) => {
    const isTracklist = useSelector((store: IStore)=>{ 
        return store.isTracklist;
    });
    return <>
        <div id="TheMeta" style={{ opacity: isTracklist ? "0" : "1" }}>
            <h1 style={{ color: mainColor }}>{ title }</h1>
            <h2>{ artist }</h2>
        </div>
    </>
}

export default TheMeta;