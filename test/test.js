import swap from '../tool/swap'
import bubbleSort from '../sort/bubble-sort'
import selectionSort from '../sort/selection-sort'
import insertionSort from '../sort/insertion-sort'
import quickSort from '../sort/quick-sort'
import mergeSort from '../sort/merge-sort'
import quickInPlaceSort from '../sort/quick-in-place-sort'

let testArr = [9, 8, 3, 5, 4, 6, 7, 1, 2]
let testArr1 = [1, 4, 2, 5]

// swap(testArr, 0, 2)

// console.log('bubbleSort:', bubbleSort(testArr))

// console.log('selectionSort:', selectionSort(testArr))

// console.log('insertionSort:', insertionSort(testArr))
// console.log('quickSort:', quickSort(testArr))

// console.log('mergeSort:', mergeSort(testArr))
console.log('quickInPlaceSort:', quickInPlaceSort(testArr, 0, 8))
