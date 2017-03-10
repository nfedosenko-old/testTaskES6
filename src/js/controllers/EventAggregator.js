let handlers = [];

export default class EventAggregator {

    static trigger(event, args) {
        handlers.forEach(function (topic) {
            if (topic.event === event) {
                topic.handler(args);
            }
        });
    }

    static on(event, handler, context) {
        if (typeof context === 'undefined') {
            context = handler;
        }

        handlers.push({event: event, handler: handler.bind(context)});
    }

}