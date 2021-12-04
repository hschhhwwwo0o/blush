import React, { FunctionComponent } from "react";
import "./index.styl";

/**
 *
 * Interface
 *
 * @interface IICO
 */
interface IICO {
  isOpen?: boolean;
}

/**
 *
 * List Button in titlebar for open modal tracklist
 *
 * @param {boolean} isOpen Affects the appearance of the button
 *
 * @returns {FunctionComponent} JSX Component
 *
 */
const ListICO: FunctionComponent<IICO> = ({ isOpen }) => {
  return (
    <div className={`ListICO ${isOpen ? "closeICO" : ""}`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default ListICO;
