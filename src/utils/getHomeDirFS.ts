import OS from "os";

/**
 * 
 * Return homedir. Example: "C:\Users\UserName"
 * 
 * @returns {string}
 * 
*/

export default OS.userInfo().homedir;