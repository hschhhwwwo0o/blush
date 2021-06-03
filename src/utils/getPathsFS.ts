import { readdirSync } from "fs";

/**
 * 
 * The function gets the paths to the files in the folder
 * 
 * @method
 * @param dirs Array strings
 * 
 * @returns Paths to files in the folder
 */

function getPathsFS(dirs: string[]): string[] {
    let fls = new Array();

    dirs.forEach((path: string) => {
        if(path !== "") {
            const files = readdirSync(path);
            const paths = files.map((file) => {
                return `${path}\\${file}`;
            });

            fls = [...fls, paths];
        };
    });

    return fls[0];
};

export default getPathsFS;