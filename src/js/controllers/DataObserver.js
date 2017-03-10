export default class DataObserver {
    constructor() {
        this.handlers = [];
    }

    subscribe(event, handler, context) {
        if (typeof context === 'undefined') {
            context = handler;
        }
        this.handlers.push({event: event, handler: handler.bind(context)});
    }

    publish(event, args) {
        this.handlers.forEach(function (topic) {
            if (topic.event === event) {
                topic.handler(args);
            }
        })
    }
}