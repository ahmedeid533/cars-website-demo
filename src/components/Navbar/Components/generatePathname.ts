export const generatePathname = (arr: string[]): string => {
    let res = '';
    arr.slice(2).map(index => {
        res = res + "/" + index
    })
    return res
}