/**
 * алгоритм поиска элемента в отсортированном массиве, использующий дробление массива на половины
 * @param {number[]} array Отсортированый массив чисел 
 * @param {number} elem искомый елемент
 * @returns {number} - индекс искомого элемента массива
 */
function binarySearch(array, elem) {
    let start = 0,
        end = array.length,
        middle,
        position = -1;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === elem) {
            position = middle;
            return position;
        }
        if (elem < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

export {
    binarySearch
}