import ErrorFactory from '../controllers/ErrorFactory';
import ItemService from '../controllers/ItemService';
import TemplateFactory from '../controllers/TemplateFactory';

import EventAggregator from '../controllers/EventAggregator';

const generateInitialTemplate = Symbol('generateTemplate');
const rootElement = Symbol('rootElement');

export default class Table {

    constructor(rootDomElement) {
        if (!rootDomElement) {
            throw ErrorFactory.getConstructorError('TableModule');
        }

        this[rootElement] = rootDomElement;
        this[generateInitialTemplate]();

        this.itemService = new ItemService();
    }

    //Public

    onAddHero(itemOptions) {
        this.itemService.addItem(itemOptions);
    }

    onRemoveHero() {

    }

    //Private

    [generateInitialTemplate]() {
        this[rootElement].append(TemplateFactory.getTableTemplate());
    }
}