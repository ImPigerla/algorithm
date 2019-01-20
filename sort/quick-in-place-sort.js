import swap from '../tool/swap'

function partition(arr, start, end, pivotIndex) {
    let pivotValue = arr[pivotIndex], storeIndex = start
    swap(arr, pivotIndex, end)
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, storeIndex, i)
            storeIndex = storeIndex + 1
        }
    }
    swap(arr, end, storeIndex)
    return storeIndex
}

export default function sort(arr, start, end) {
    if (end > start) {
        let pivotIndex = Math.floor((start + end) / 2),
        pivotIndexNew = partition(arr, start, end, pivotIndex)
        sort(arr, start, pivotIndexNew - 1)
        sort(arr, pivotIndexNew + 1, end)
    }
    return arr
}