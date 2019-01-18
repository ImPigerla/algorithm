import swap from '../tool/swap'

export default function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                flag = true
            }
        }
        if (flag === false) {
            break;
        }
    }

    return arr
}
