/**
 * Возвращает количество инверсий в массиве
 * @param {*} array 
 * @returns {number} 
 */
function inversionCount(array) {

    let copy = array.slice();

    return mergeSortInv(copy, 0, copy.length);
}

function mergeInv(A, start, mid, end) {
    let L = A.slice(start, mid);
    let R = A.slice(mid, end);

    let i = 0,
        j = 0,
        k = start,
        count = 0;

    while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
            A[k++] = L[i++];
        } else if (L[i] > R[j]) {
            A[k++] = R[j++];
            count += L.slice(i).length;
        }
    }

    while (i < L.length) {
        A[k++] = L[i++];
    }
    while (j < R.length) {
        A[k++] = R[j++];
    }
    return count;
}

function mergeSortInv(array, firstIndex, arrayLength) {
    let result = 0;
    if (firstIndex + 1 < arrayLength) {
        let middle = Math.floor((arrayLength + firstIndex) / 2);
        result += mergeSortInv(array, firstIndex, middle);
        result += mergeSortInv(array, middle, arrayLength);
        result += mergeInv(array, firstIndex, middle, arrayLength);
    }
    return result;
}

export {
    inversionCount
};