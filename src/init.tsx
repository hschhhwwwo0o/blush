import OS from "os";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { readFileSync } from "fs";
import { parseFile } from "music-metadata";

import __GET_PATHS from "./utils/__GET_PATHS.js";
import MainLayout from "./layout/index";

const __HOME_DIR = OS.userInfo().homedir;

const PATHS_DIRS = [
    `${__HOME_DIR}/Music/test`,
]

const __RENDER = async () => {

    // Metadata
    const data = __GET_PATHS(PATHS_DIRS).map( async (URI: string) => {

        const metadata = await parseFile(URI);

        const buffer = readFileSync(URI);
        const blob = new Blob([buffer], { type: "audio/mp3" });
        const url = window.URL.createObjectURL(blob);

        return {
            url:        url,
            artist:     metadata.common.artist,
            title:      metadata.common.title
        }

    } )

    // Wait metadata
    Promise.all(data)
    
    .then( (data) => {

        function render() {
            console.log(data)
            ReactDOM.render( 
                <MainLayout data={ data } />, 
                document.querySelector("#root")
            );
        }

        render();

    } )

}

__RENDER();
