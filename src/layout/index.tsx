import React, { ReactChild, ReactChildren } from "react";

interface ILayout {
    children: ReactChild | ReactChildren | JSX.Element [];
}

/**
 * 
 * Layout component
 * 
 * @component
 * 
 * @param children JSX component || components
 * 
 * @returns {JSX} Return Layout component
 * 
 * @example
 * 
 * import React from "react";
 * import Layout from "./layout";
 * 
 * const App = () => {
 *  return <Layout>
 *   <h1>Hello World!</h1>
 *  </Layout>
 * }
 * 
*/

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
    return <>
        <main id="app">
            { children }
        </main>
    </>
}

export default Layout;