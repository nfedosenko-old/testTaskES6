import Table from './viewModels/Table';
import Sidebar from './viewModels/Sidebar';

import ErrorFactory from './controllers/ErrorFactory';

class Application {
    constructor(options) {
        if (!options) {
            throw ErrorFactory.getConstructorError('Application');
        }

        new Table(options.root.table);
        new Sidebar(options.root.sidebar);
    }

}

(function ($) {
    const options = {
        root: {
            sidebar: $('#sidebar-wrapper'),
            table: $('#table-wrapper')
        }
    };
    new Application(options);
}(jQuery));