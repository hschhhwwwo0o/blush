import React from "react";
import "./index.styl";

/**
 * 
 * List Button in titlebar for open modal tracklist
 * 
 * @param {boolean} isOpen Affects the appearance of the button
 *  
 * @returns {JSX} JSX Component
 * 
 */

const ListICO: React.FunctionComponent<{ isOpen?: boolean }> = ({ isOpen }) => {
    return <div className={`ListICO ${isOpen ? "closeICO" : ""}`}>
        <div></div>
        <div></div>
    </div>
}

export default ListICO;