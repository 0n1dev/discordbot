const { Listener } = require('discord-akairo');

class MRRListener extends Listener {
    constructor() {
        super('messageReactionRemove', {
            emitter: 'client',
            eventName: 'messageReactionRemove'
        });
    }

    exec(messageReaction, user) {
      console.log('2');
    }
}

module.exports = MRRListener;
