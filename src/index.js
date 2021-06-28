import {
    createsArray,
    stopwatch
} from './utils/utils';

import {
    fisherYatesShuffle
} from './other/fisher_yates_shuffle';

import {
    linearSearch
} from './search/linear_search';

import {
    binarySearch
} from './search/binary_search.js';

import {
    Stack
} from './data_structures/stack.js';
import {insertionSort} from './sorting_algorithms/insertion_sort';

import { selectionSort } from './sorting_algorithms/selection_sort';

import {mergeSort} from './sorting_algorithms/merge_sort';
import {searchForTwoNumbers} from './tasks/number_1';
import {bubbleSort} from './sorting_algorithms/bubblesort';
import {inversionCount, merge} from './other/inversion_count'



let arr = createsArray(1, 120);
fisherYatesShuffle(arr);
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 3];

console.log(arr1)
console.log(inversionCount(arr1))
console.log(arr1)

