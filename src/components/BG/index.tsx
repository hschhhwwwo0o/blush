import React from "react";
import { useSelector } from "react-redux";
import { IBG } from "./interface";
import { IStore } from "../../redux/interface.store";
import "./index.styl";

/**
 * Component for Background of player.
 *
 * @function
 * @component
 * 
 * @param {boolean} online Online / Offline status 
 * @param {string} image Image string 
 * 
 * @returns {React.FunctionComponent | React.FC} JSX Component
 * 
 * @example 
 * 
 * import React from "react";
 * import BG from "./BG";
 * 
 * const App: React.FunctionComponent = () => {
 *   return <BG />
 * }
 * 
 */

const BG: React.FunctionComponent<IBG> = ({ online, image }) => {

    /**
     * 
     * Object for inline styles backgroundImage
     * 
     * @name useImage
     * 
    */
    const useImage = { backgroundImage: `url(${image})` };

    /**
     * 
     * Object for inline styles backgroundColor if online == false
     * 
     * @name useStandartColor
     * 
    */
    const useStandartColor = { backgroundColor: "#461027" };

    /**
     * Get store values
    */
    const { isTracklist } = useSelector((store: IStore) => {
        return {
            isTracklist: store.isTracklist,
        }
    });

    return (
        <div 
            id="bg" 
            style={ online ? useImage : useStandartColor } 
            className={ isTracklist ? "bright" : "" }
        />
    )
}

export default BG;