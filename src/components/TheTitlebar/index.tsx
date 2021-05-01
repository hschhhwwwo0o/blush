import { remote } from "electron";
import React from "react";

const TheTitleBar = () => {

    const __windowClose = () => {
        window.top.close()
    }

    const __windowMinimize = () => {
        remote.getCurrentWindow().minimize()
    }

    return <>
        <div id="titlebar">
            <div></div>
            <div id="titlebar__tools">
                <div 
                    className   = "titlebar__button" 
                    id          = "titlebar__minimize-button" 
                    onClick     = { __windowMinimize }
                >
                    <div />
                </div>
                <div 
                    className   = "titlebar__button" 
                    id          = "titlebar__close-button" 
                    onClick     = { __windowClose }
                >
                    <div />
                </div>
            </div>
        </div>
    </>
}

export default TheTitleBar;