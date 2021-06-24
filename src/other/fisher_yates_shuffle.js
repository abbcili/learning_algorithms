import {
    randomInteger
} from '../utils/utils';


function fisherYatesShuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = randomInteger(0, array.length - 1);

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

export {
    fisherYatesShuffle
}