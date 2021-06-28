import {
    binarySearch
} from '../search/binary_search';
import {
    mergeSort
} from '../sorting_algorithms/merge_sort';


/**
 * функция возвращает true если в множестве целых чисел есть два элемента
 * сумма которых будет равно number
 * O(N log N)
 * @param {Array} array множество целых чисел
 * @param {Number} number 
 * @returns {boolean}
 */
function searchForTwoNumbers(array, number) {

    let l = array.length;
    mergeSort(array, 0, l);

    for (let i = 0; i < l; i++) {
        if (binarySearch(array, number - array[i])) return true;
    }
    return false;
}

export {
    searchForTwoNumbers
}