import React from "react";
import { INotFound } from "./interface";
import "./index.styl";
import Layout from "../../layout";
import TheTitlebar from "../TheTitleBar";
import TheMeta from "../TheMeta";

const NotFound: React.FunctionComponent<INotFound> = ({ image, color }) => {
    return <Layout>
        <TheTitlebar />
        <TheMeta title="Music Not Found" artist="Add your music on E:/Music directory" />
    </Layout>
} 

export default NotFound;