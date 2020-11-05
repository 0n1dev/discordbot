const { Listener } = require('discord-akairo');

class MRAListener extends Listener {
    constructor() {
        super('messageReactionAdd', {
            emitter: 'client',
            eventName: 'messageReactionAdd'
        });
    }

    exec(messageReaction, user) {
      console.log('1');
    }
}

module.exports = MRAListener;
