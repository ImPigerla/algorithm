const merge = function (leftArr, rightArr) {
    let result = []
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] > rightArr[0]) {
            result.push(rightArr.shift())
        } else {
            result.push(leftArr.shift())
        }
    }
    return result.concat(leftArr, rightArr)
}

export default function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let divider = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, divider),
        rightArr = arr.slice(divider)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}