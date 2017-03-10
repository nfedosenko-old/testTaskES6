import ConstructorError from '../models/ConstructorError';

export default class ErrorFactory {
    static getConstructorError(moduleName) {
        return new ConstructorError(`Constructor Error: not all of constructor arguments specified for ${moduleName}`);
    }
}