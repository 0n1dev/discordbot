const { Listener } = require('discord-akairo');

class MessageDeleteListener extends Listener {
    constructor() {
        super('messageDelete', {
            emitter: 'client',
            eventName: 'messageDelete'
        });
    }

    exec(msg) {
      //console.log(msg);
    }
}

module.exports = MessageDeleteListener;
