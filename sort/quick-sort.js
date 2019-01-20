// 此版本需要额外存储空间
export default function sort(arr) {
    let length = arr.length
    if (length < 2) {
        return arr
    }

    let divider = arr[0], leftArr = [], rightArr = []
    for (let i = 1; i < length; i++) {
        if (arr[i] >= divider) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }

    return sort(leftArr).concat(divider, sort(rightArr))
}