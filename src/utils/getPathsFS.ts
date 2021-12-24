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
  /**
   * File paths
   *
   */
  let fls: string[] | any[] = new Array();

  dirs.forEach((path: string) => {
    if (path !== "") {
      /**
       * Files inside a folder
       *
       */
      const files = readdirSync(path);
      const separate = path.includes("/") ? "/" : "\\";

      /**
       * File paths
       *
       */
      const paths: string[] = files.map((file) => {
        return `${path}${separate}${file}`;
      });

      fls = [...fls, paths];
    }
  });

  return fls[0];
}

export default getPathsFS;
