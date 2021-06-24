/**
 * Сортировка вставками предтсавленая в виде рекурсии O(n**2)
 * @param {Array} array 
 * @param {Number} n количество элементов в массиве
 * @returns 
 */
function insertionSort(array, n) {
    if (n < 1) return;
    insertionSort(array, n - 1);

    let key = array[n - 1];
    let j = n - 2;

    while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = key;
}