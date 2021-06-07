import React from "react";
import { remote } from "electron";
import { useDispatch, useSelector } from "react-redux";
import { SET_TRACKLIST } from "../../redux/actions";
import { IStore } from "../../redux/interface.store";
import ListICO from "./ListICO";
import CloseICO from "./CloseICO";
import HideICO from "./HideICO";
import "./index.styl";

/**
 * 
 * Component JSX Titlebar window
 * 
 * @function
 * @component
 * 
 * @returns {React.FunctionComponent | React.FC} JSX Component
 * 
 * @example
 * 
 * import React from "react";
 * import TheTitlebar from "./TheTitlebar";
 * 
 * const App: React.FunctionComponent = () => {
 *   return (
 *     <TheTitlebar />
 *   )
 * }
 * 
 */
const TheTitleBar: React.FunctionComponent = () => {

    /**
     * 
     * React/Redux dispath method for change global redux state
     * 
     */
    const dispath = useDispatch();

    /**
     * 
     * Get isTracklist value from global redux state
     * 
     */
    const { isTracklist } = useSelector((state: IStore) => {
        return {
            isTracklist: state.isTracklist,
        };
    });

    /**
     * 
     * Use for close application
     * 
     * @function windowClose
     * 
     * @returns {void}
     * 
     */
    const windowClose = () => {
        window.top.close();
    };

    /**
     * 
     * Use for minimize application
     * 
     * @function windowMinimize
     * 
     * @returns {void}
     * 
     */
    const windowMinimize = () => {
        remote.getCurrentWindow().minimize();
    };

    /**
     * 
     * Use for make Tracklist component visible
     * 
     * @function windowOpenTracklist
     * 
     * @returns {void}
     * 
     */
    const windowOpenTracklist = () => {
        dispath({
            type: SET_TRACKLIST,
            isTracklist: !isTracklist,
        });
    };

    return <>
        <header>
            <section id="TheTitlebar">
                <div id="TheTitlebar__logo">BLUSH</div>
                <div onClick={windowOpenTracklist}>
                    <ListICO isOpen={isTracklist} />
                </div>
                <div id="TheTitlebar__controls">
                    <div id="TheTitlebar__hide" className="button" onClick={windowMinimize}>
                        <HideICO />
                    </div>
                    <div id="TheTitlebar__close" className="button" onClick={windowClose}>
                        <CloseICO />
                    </div>
                </div>
            </section>
        </header>
    </>
}

export default TheTitleBar;