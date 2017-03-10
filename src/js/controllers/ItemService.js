import Item from '../models/Item';

const items = Symbol('items');
const setupItems = Symbol('setupItems');

export default class ItemService {
    constructor() {
        this[setupItems]();
    }

    //Public

    addItem(itemOptions) {
        const item = new Item(itemOptions);
        this[items].add(item);
    }

    removeItem(item) {

    }

    getItems() {
        return this[items];
    }

    //Private

    [setupItems]() {
        let itemsFromStorage = localStorage.getItem('items');
        if (itemsFromStorage) {
            this[items] = itemsFromStorage;
        } else {
            this[items] = new Set();
            this[items].add({name: 'test'});
            localStorage.setItem('items', JSON.stringify([...this[items]]));
        }
    }
}