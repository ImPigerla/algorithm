export default function (arr) {
    let temp, min
    for (let i = 0; i < arr.length - 1; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }

    return arr
}
