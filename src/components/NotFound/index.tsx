import React from "react";
import { INotFound } from "./interface";
import "./index.styl";
import TheTitlebar from "../TheTitleBar";
import TheMeta from "../TheMeta";

/**
 * 
 * NotFound music 404 page  
 * 
 * @function
 * @component
 * 
 * @returns {React.FunctionComponent | React.FC} JSX Component
 * 
*/

const NotFound: React.FunctionComponent<INotFound> = ({ image, color }) => {
    return <>
        <TheTitlebar />
        <TheMeta title="Music Not Found" artist="Add your music on E:/Music directory" />
    </>
} 

export default NotFound;