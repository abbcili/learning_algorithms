
/**
 * Сортировка вставками O(n**2)
 * Сортирует массив по возрастанию
 * @param {Array} array 
 * @returns {Array}
 */
function insertionSort(array){
    let count = 0;
    for(let i = 1, len = array.length; i < len; i++){

        let key = array[i];
        let j = i;

        while (j > 0 && array[j - 1] > key){
            count++;
            array[j] = array[j - 1];
            j--;
        }
        array[j] = key;
    }
    console.log(count)
    return array;
}


export {insertionSort}