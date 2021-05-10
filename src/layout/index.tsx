import React from "react";

const Layout: React.FunctionComponent = ({ children }) => {
    return <>
        <main id="app">
            { children }
        </main>
    </>
}

export default Layout;