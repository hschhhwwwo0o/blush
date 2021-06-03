import React, { ReactChild, ReactChildren } from "react";

interface ILayout {
    children: ReactChild | ReactChildren | JSX.Element [];
}

/**
 * 
 * Layout component
 * 
 * 
 * @param children JSX component || components
 * 
 * @returns {JSX} Return Layout component
*/

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
    return <>
        <main id="app">
            { children }
        </main>
    </>
}

export default Layout;