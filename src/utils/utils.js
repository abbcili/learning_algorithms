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

/**
 * Функция добовляет свойство или сетод в obj.prototype
 * с установленными дескрипторами:
 * writable,
 * enumerable,
 * configurable,
 * value,
 * @param {Object} - Объект куда будет записано свойство или метод
 * @param {String} - Имя свойства или метода.
 * @param {boolean} - Флаг для Writeble
 * @param {boolean} - Флаг для enumerable
 * @param {boolean} - Флаг для configurable
 * @param {any} - знчаение свойства или исполняемая функция для метода
 */
function setDescriptors(obj, valueName, writable, enumerable, configurable, value) {
    Object.defineProperty(obj, valueName, {
        writable,
        enumerable,
        configurable,
        value,
    })
}

export {
    randomInteger,
    createsArray,
    setDescriptors
}