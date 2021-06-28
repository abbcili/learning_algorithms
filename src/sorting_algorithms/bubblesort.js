/**
 * Сортировка пузырьком O(n**2)
 * @param {*} arr 
 */
function bubbleSort(arr) {
    for (let i = 0, l = arr.length - 1; i < l; i++) {
        for (let j = l; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
}


export {bubbleSort}