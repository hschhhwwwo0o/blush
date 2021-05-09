import React from "react";

const MusicGrid: React.FunctionComponent = ({ children }) => {
    return <>
        <header id="grid__header">
            <div></div>
            <div style={{ marginLeft: "14px" }}>
                <h4>TITLE / ALBUM</h4>
            </div>
            <div style={{ marginLeft: "5px" }}>
                <h4>ARTIST</h4>
            </div>
            <div className="two grid__year" style={{ marginLeft: "2px" }}>
                <h4>YEAR</h4>
            </div>
            <div className="grid__time" style={{ marginLeft: "-1px" }}>
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