function merge(A, start, mid, end) {
    let L = [],
        R = [],
        n1 = mid - start,
        n2 = end - mid;

    for (let i = 0; i < n1; i++) {
        L.push(A[start + i]);
    }
    for (let j = 0; j < n2; j++) {
        R.push(A[mid + j]);
    }
    L.push(Infinity);
    R.push(Infinity);

    let i = 0,
        j = 0;

    for (let k = start; k < end; k++) {
        L[i] < R[j] ?
        A[k] = L[i++]: A[k] = R[j++];
    }
}
/**
 * Сортировка слиянием O(n log n)
 * @param {Array} array Сортируемый массив
 * @param {Number} firstIndex индекс первого элемента массива
 * @param {Number} arrayLength количество элементов массива(длинна)
 */
function mergeSort(array, firstIndex, arrayLength) {
    if (firstIndex + 1 < arrayLength) {
        let middle = Math.floor((arrayLength + firstIndex) / 2);
        mergeSort(array, firstIndex, middle);
        mergeSort(array, middle, arrayLength);
        merge(array, firstIndex, middle, arrayLength);
    }
}

export {
    mergeSort
}