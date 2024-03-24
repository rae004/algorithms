import { countDown } from '@/algorithms/countdown';
import { bubbleSort } from '@/algorithms/bubbleSort';
import { mergeSort } from '@/algorithms/mergeSort';
import { quickSort } from '@/algorithms/quickSort';
import { binarySearch } from '@/algorithms/binarySearch';

countDown(10, 200);
console.log(
  'our Bubble Sort results: ',
  bubbleSort(
    [2, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1, 5, 3],
    'asc',
  ),
);

console.log(
  'Our Merge sort results: ',
  mergeSort([2, 4, 1, 5, 3, 6], (a, b) => a > b, 0),
);

console.log(
  'Our Quick Sort results: ',
  quickSort([2, 4, 1, 5, 3, 6], (a, b) => a < b),
);

console.log('Our Binary Search results: ', binarySearch([1, 2, 3, 4, 5, 6], 5));
