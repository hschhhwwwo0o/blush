import React from "react";

const MusicGrid: React.FunctionComponent = ({ children }) => {
    return <>
        <header id="grid__header">
            <div></div>
            <div className="one">
                <h4>TITLE / ALBUM</h4>
            </div>
            <div className="two">
                <h4>ARTIST</h4>
            </div>
            <div className="two">
                <h4>YEAR</h4>
            </div>
            <div>
                <h4>TIME</h4>
            </div>
            <div></div>
        </header>
        <div id="grid-tmp3">
            { children }
        </div>
    </>
}

export default MusicGrid;