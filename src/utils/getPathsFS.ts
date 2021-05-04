import { readdirSync } from "fs";

function getPathsFS(PATHS_DIRS: string[]): string[] {
    let fls = new Array();

    PATHS_DIRS.forEach( (path: string) => {

        const files = readdirSync(path);

        const paths = files.map( (file) => {
            return `${path}\\${file}`
        });

        fls = [...fls, paths];
    });

    return fls[0];
};

export default getPathsFS;