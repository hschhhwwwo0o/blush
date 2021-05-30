import React from "react";
import { remote } from "electron";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/interface.store";
import ListICO from "./ListICO";
import "./index.styl";
import { SET_TRACKLIST } from "../../redux/actions";

const TheTitleBar: React.FunctionComponent = () => {
    const dispath = useDispatch();
    const { isTracklist } = useSelector((state: IStore) => {
        return {
            isTracklist: state.isTracklist,
        };
    });
    const __windowClose = () => {
        window.top.close();
    };
    const __windowMinimize = () => {
        remote.getCurrentWindow().minimize();
    };
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
                    <ListICO />
                </div>
                <div id="TheTitlebar__controls">
                    <div id="TheTitlebar__hide" onClick={__windowMinimize}>
                        <div />
                    </div>
                    <div id="TheTitlebar__close" onClick={__windowClose}>
                        <div />
                    </div>
                </div>
            </section>
        </header>
    </>
}

export default TheTitleBar;