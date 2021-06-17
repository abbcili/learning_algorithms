/**
 * функция конструктор
 * создает структуру данных: Стек
 * @constructor
 */
function Stack() {
    this.count = 0;
    this.storage = {}

    Object.defineProperty(this, "count", {
        enumerable: false,
        configurable: false,
        writable: true,
    })
}

/**
 * метод добовляет элемент на верх стека
 * @param {any} elem 
 */
Stack.prototype.push = function (elem) {
    this.storage[this.count] = elem;
    this.count++;
}

/**
 * метод удаляет верхний элемент стека и возвращает его
 * @returns {any}
 */
Stack.prototype.pop = function () {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

/**
 * метод возвращает верхний элемент стека
 * @returns {any}
 */
Stack.prototype.peek = function () {
    return this.storage[this.count - 1];
}

/**
 * метод возвращает размер стека(количество элементов в стеке)
 * @returns {number}
 */
Stack.prototype.size = function () {
    return this.count;
}
/**
 * метод возвращает true, если стек пуст и false в противном
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
    return this.count === 0 ? true : false;
}

export {Stack}