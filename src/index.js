import {
    createsArray
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


let arr = createsArray(1, 10000);

arr = fisherYatesShuffle(arr);
let start = Date.now();
insertionSort(arr)
console.log((Date.now() - start) / 1000 + " s");
