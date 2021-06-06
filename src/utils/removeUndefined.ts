/**
 * 
 * Function remove undefined value from any array
 * 
 * @param {Array} arr Array
 * 
 * @returns {Array} Array without undefined
 */
function removeUndefined(arr: any): any[] {
    return arr.filter((element: any) => {
        return element !== undefined;
    });
}

export default removeUndefined;