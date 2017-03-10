import ErrorFactory from '../controllers/ErrorFactory';
import TemplateFactory from '../controllers/TemplateFactory';

const generateInitialTemplate = Symbol('generateTemplate');
const rootElement = Symbol('rootElement');

export default class Sidebar {

    constructor(rootDomElement) {

        if (!rootDomElement) {
            throw ErrorFactory.getConstructorError('SidebarModule');
        }

        this[rootElement] = rootDomElement;
        this[generateInitialTemplate]();
    }

    //Public

    updateStatistics() {

    }

    //Private

    [generateInitialTemplate]() {
        this[rootElement].append(TemplateFactory.getSidebarTemplate());
    }
}
