import { statSync } from "fs";

/**
 *
 * The function initializes the user's work folders.
 *
 * @param paths String array. Example: ["C:\Users\UserName\Music", "C:\Users\UserName\MoreMusic"]
 *
 * @returns {Array} Returns only existing folders in the file system
 */
function InitializeDirectories(paths: string[]): string[] | [] {
  /**
   * Initialize dirs
   *
   */
  let dirs: string | any = [];

  /**
   * Creating dirs based on paths
   *
   */
  dirs = paths.map((path) => {
    try {
      if (statSync(path).isDirectory()) {
        return path;
      }
    } catch (err) {
      return "";
    }
  });

  return dirs;
}

export default InitializeDirectories;
