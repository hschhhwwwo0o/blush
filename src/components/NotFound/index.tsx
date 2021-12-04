import React from "react";
import { INotFound } from "./interface";
import "./index.styl";
import TheTitlebar from "../TheTitleBar";
import TheMeta from "../TheMeta";

/**
 *
 * NotFound music 404 page
 *
 * @function
 * @component
 *
 * @returns {React.FunctionComponent | React.FC} JSX Component
 *
 * @example
 *
 * import React from "react";
 * import NotFound from "./NotFound";
 *
 * const App: React.FunctionComponent = () => {
 *   return (
 *     <NotFound />
 *   )
 * }
 *
 */
const NotFound: React.FunctionComponent<INotFound> = ({ image, color }) => {
  return (
    <>
      <TheTitlebar />
      <TheMeta
        title="Music Not Found"
        artist="Add your music on E:/Music directory"
      />
    </>
  );
};

export default NotFound;
