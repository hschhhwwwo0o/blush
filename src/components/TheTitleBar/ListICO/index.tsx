import React from "react";
import "./index.styl";

const ListICO: React.FunctionComponent<{ isOpen?: boolean }> = ({ isOpen }) => {
    return <div className={`ListICO ${isOpen ? "closeICO" : ""}`}>
        <div></div>
        <div></div>
    </div>
}

export default ListICO;