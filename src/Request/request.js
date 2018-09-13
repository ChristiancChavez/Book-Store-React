import { bookStore } from '../Utils/request';

const requestGetBook = () => {
    return bookStore.get('books');
};

const requestGetCharacters = () => {
    return bookStore.get('characters');
};

const requestGetHouses = () => {
    return bookStore.get('houses');
};

const requestGetHouse = (houseId) => {
    return bookStore.get(`houses/${houseId}`);
}

export {
    requestGetBook,
    requestGetCharacters,
    requestGetHouses, 
    requestGetHouse,
};