export default class ConstructorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConstructorError';
        this.message = message;
    }
}