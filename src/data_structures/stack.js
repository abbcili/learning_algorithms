import {
    setDescriptors
} from "../utils/utils";

function Stack() {
    this._stack = Object.create(null);

    Object.defineProperty(this, "_size", {
        value: 0,
        writable: true,
        enumerable: false,
        configurable: false,
    });

    Object.defineProperty(this, "_stack", {
        writable: true,
        enumerable: false,
        configurable: false,
    });

    Object.preventExtensions(this);
}

setDescriptors(
    Stack.prototype,
    "push",
    true,
    false,
    false,
    /**
     * 
     * @param {any} value - элемент который будет добавлен в стек
     */
    function push(value) {
        this._stack[this._size] = value;
        this._size++;
    }
);
setDescriptors(
    Stack.prototype,
    "isEmpty",
    true,
    false,
    false,
    /**
     * 
     * @returns {boolean} Возвращает true если стек пуст и false в противном
     */
    function isEmpty() {
        if (this._size === 0) return true;
        return false;
    }
);

setDescriptors(
    Stack.prototype,
    "pop",
    true,
    false,
    false,
    /**
     * Метод удаляет верхний элемент и возвращает его 
     * @returns {any, undefined} - возвращает удаленный элемент и undefined если стек пуст
     */
    function pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._size--;
        let result = this._stack[this._size];
        delete this._stack[this._size];
        return result;
    }
);


setDescriptors(
    Stack.prototype,
    "peek",
    true,
    false,
    false,
    /**
     * 
     * @returns Возвращает верхний элемент
     */
    function peek() {
        return this._stack[this._size - 1];
    }
);

setDescriptors(
    Stack.prototype,
    "printStack",
    true,
    false,
    false,
    /**
     * 
     * @returns Возвразает стек в формате строки
     */
    function printStack() {
        let result = "";
        let size = this._size - 1;
        let ind = 1;

        while (size >= 0) {
            result += `[${ind} : ${this._stack[size]}]\n`;
            size--;
            ind++;

        }
        return result;
    }
);
Object.defineProperty(Stack.prototype,
    "size", {
        /**
         * 
         * @returns возвращает количесвто элементов в стеке
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: false,
    }
);
/**
 * Преобразование в приметив:
 * string - Вызывает функцию printStack();
 * number - undefined,
 * default - undefined.
 * @param {any} hint 
 * @returns 
 */
Stack.prototype[Symbol.toPrimitive] = function (hint) {
    return hint === "string" ? this.printStack() : undefined;
};

export {
    Stack
}