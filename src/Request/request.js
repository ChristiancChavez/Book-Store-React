import { bookStore } from '../Utils/request';

const requestGetBook = () => {
    return bookStore.get(`books`);
};

const requestGetCharacters = () => {
    return bookStore.get(`characters`);
};

const requestGetHouses = () => {
    return bookStore.get(`houses`);
};

export {
    requestGetBook,
};