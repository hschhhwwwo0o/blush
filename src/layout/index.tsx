import React, { ReactChild, ReactChildren, ReactNode } from "react";

/**
 * App interface
 *
 * @interface
 *
 */
interface ILayout {
  children: (ReactChild | ReactChildren | JSX.Element[]) & ReactNode;
}

/**
 *
 * Layout component
 *
 * @function
 * @component
 *
 * @param {(React.ReactChild | React.ReactChildren | JSX.Element[]) & React.ReactNode} children JSX component || components
 *
 * @returns {React.FunctionComponent | React.FC} Return Layout component
 *
 * @example
 *
 * import React from "react";
 * import Layout from "./layout";
 *
 * const App: React.FunctionComponent = () => {
 *   return <Layout>
 *     <h1>Hello World!</h1>
 *   </Layout>
 * }
 *
 */
const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <main id="app">{children}</main>
    </>
  );
};

export default Layout;
