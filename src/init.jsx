import * as React from 'react';
import * as ReactDOM from 'react-dom';

import OS from "os";
import fs from "fs";
import { parseFile } from "music-metadata";

const __HOME_DIR = OS.userInfo().homedir;

const PATHS_DIRS = [
    `${__HOME_DIR}\\Music\\test`,
]

console.log("start")

const __GET_PATHS = () => {
    try {
        let fls = new Array();

        PATHS_DIRS.forEach( (path) => {
            const files = fs.readdirSync(path)
            const paths = files.map( (file) => {
                return `${path}\\${file}`
            } )

            fls = [...fls, paths]
        } )

        return fls[0]

    } catch (error) {
        console.error(error)
    }
}

const getMetaTags = async () => {


    let data = __GET_PATHS().map( async (URI) => {

        const metadata = await parseFile(URI);

        const buffer = fs.readFileSync(URI);
        const blob = new Blob([buffer], { type: "audio/mp3" });
        const url = window.URL.createObjectURL(blob);

        metadata.url = url;

        return {
            url:        url,
            artist:     metadata.common.artist,
            title:      metadata.common.title
        }

    } )

    Promise.all(data)
    
    .then( (data) => { 

        console.log(data)

        function render() {
            console.log(data)
            ReactDOM.render( <h2>Blush</h2>, document.querySelector("#root"));
        }

        render();

    } )

}


getMetaTags()

console.log(__GET_PATHS())
