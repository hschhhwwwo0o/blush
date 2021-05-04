import React from "react";
import TheTitlebar from "../components/TheTitlebar";

import { ITrack } from "../types";

interface IData {
    data: ITrack[]
}

const Index: React.FunctionComponent<IData> = ({ data }) => {
    return <>
        <main id="app">
            <TheTitlebar />
        </main>
    </>
}

export default Index;