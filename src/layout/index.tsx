import React, { ReactChild, ReactChildren } from "react";

interface ILayout {
    children: ReactChild | ReactChildren | JSX.Element [];
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
    return <>
        <main id="app">
            { children }
        </main>
    </>
}

export default Layout;