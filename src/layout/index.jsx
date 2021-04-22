import React from "react";

const Index = ({ data }) => {

    const closeWindow = () => {
        window.top.close()
    }

    return <>
        <main id="app">
            <div id="titlebar">
                <div></div>
                <div id="titlebar__tools">
                    <div></div>
                    <div id="titlebar__close-button" onClick={ closeWindow }>
                        <div />
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Index;