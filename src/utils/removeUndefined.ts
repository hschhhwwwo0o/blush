export default function removeUndefined(arr: any): any[] {
    return arr.filter( ( element: any ) => {
        return element !== undefined;
    });
}