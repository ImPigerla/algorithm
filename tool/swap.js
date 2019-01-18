export default function (arr, i, j) {
    // console.log('before:', arr)
    // 利用临时变量
    let temp = arr[i]

    arr[i] = arr[j]
    arr[j] = temp

    console.log('swap :', arr)
}
