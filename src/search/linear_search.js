/**
 * 
 * @param {any} arr входящий массив элеметов
 * @param {any} elem Искомый элемент
 * @returns {boolean} 
 */

function linearSearch(arr, elem){

    for (let i = 0, len = arr.length; i < len; i++){
        if(arr[i] == elem){
            return true;
        }
    }
    return false;
}

export {linearSearch}