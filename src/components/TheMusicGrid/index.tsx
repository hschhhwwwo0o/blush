import React from "react";

const MusicGrid: React.FunctionComponent = ({ children }) => {
    return <>
        <header id="grid__header">
            <div></div>
            <div>
                <h4>TITLE / ALBUM</h4>
            </div>
            <div>
                <h4>ARTIST</h4>
            </div>
        </header>
        <div id="grid-tmp3">
            { children }
        </div>
    </>
}

export default MusicGrid;