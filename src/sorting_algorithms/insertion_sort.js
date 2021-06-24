
/**
 * Сортировка вставками O(n**2)
 * Сортирует массив по возрастанию
 * @param {Array} array 
 * @returns {Array}
 */
function insertionSort(array){
    for(let i = 1, len = array.length; i < len; i++){

        let key = array[i];
        let j = i;

        while (j > 0 && array[j - 1] > key){
            array[j] = array[j - 1];
            j--;
        }
        array[j] = key;
    }
    return array;
}


export {insertionSort}