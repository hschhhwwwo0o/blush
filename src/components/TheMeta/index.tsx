import React from "react";
import { ITheMeta } from "./interface";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import "./index.styl";

/**
 * 
 * The component displays the current title and artist of the song
 * 
 * @function
 * @component
 * 
 * @param {string} title Song title
 * @param {string} artist Song artist
 * @param {string} mainColor Color
 * 
 * @returns {React.FunctionComponent | React.FC} JSX Component
 * 
 * @example
 * 
 * import React from "react";
 * import TheMeta from "./TheMeta"
 * 
 * const App = () => {
 *   return <TheMeta title="Frail State Of Mind" artist="The 1975" mainColor="#fff" />
 * }
 * 
 */
const TheMeta: React.FunctionComponent<ITheMeta> = ({ title, artist, mainColor }) => {

    /**
     * 
     * Boolean value. If true "TheMeta" component make hidden.
     * 
     * @name isTracklist
     * 
     */
    const isTracklist = useSelector((store: IStore) => { 
        return store.isTracklist;
    });

    return <>
        <div id="TheMeta" style={{ opacity: isTracklist ? "0" : "1" }}>
            <h1 style={{ color: mainColor }}>{title}</h1>
            <h2>{artist}</h2>
        </div>
    </>
}

export default TheMeta;