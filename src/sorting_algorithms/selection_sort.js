/**
 * Сортировка выбором O(N**2)
 * @param {Array} array 
 * @returns 
 */
function selectionSort(array) {

    for (let i = 0, l = array.length; i < (l - 1); i++) {
        let min = i;

        for (let j = i + 1; j < l; j++) {
            if (array[min] > array[j]) min = j;
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
}

export {
    selectionSort
};