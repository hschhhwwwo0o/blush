import React from "react";
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
const NotFound: React.FunctionComponent = () => {
  return (
    <>
      <TheTitlebar />
      <TheMeta title="No internet" artist="ERR_INTERNET_DISCONNECTED" />
    </>
  );
};

export default NotFound;
