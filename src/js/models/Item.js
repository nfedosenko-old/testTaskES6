import ErrorFactory from '../controllers/ErrorFactory';

export default class HeroItem {
    constructor(options) {
        if (!options) {
            throw ErrorFactory.getConstructorError('HeroItem');
        }

        this.name = options.name;
        this.genius = options.genius;
        this.superpower = options.superpower;
        this.invisible = options.invisible;
    }
}