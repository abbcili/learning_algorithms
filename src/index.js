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

import {merge, mergeSort} from './sorting_algorithms/merge_sort';


let array = createsArray(1, 4);

fisherYatesShuffle(array);


mergeSort(array, 0, array.length);








