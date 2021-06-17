/**
 * Функция для возврата случайного числа
 * в заданном диапазоне
 * @param {number} min Минимальное значение диапазона
 * @param {number} max Максимальное значение диапазона
 * @returns {number}
 */
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}




/**
 * Функция создает новый отсортированый массиов в диапазоне от min до max.
 * @param {number} min Минимальное значение диапазона
 * @param {number} max Максимальное значение диапазона
 * @returns {number[]} - отсортированный массив
 */
function createsArray(min, max) {
    let array = [];

    for (; min <= max; min++) {
        array.push(min);
    }
    return array;
}

export {
    randomInteger,
    createsArray
}