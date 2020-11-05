const { Listener } = require('discord-akairo');

class voiceStateUpdateListener extends Listener {
    constructor() {
        super('voiceStateUpdate', {
            emitter: 'client',
            eventName: 'voiceStateUpdate'
        });
    }

    exec(oldMember, newMember) {
    //  console.log(newMember.voiceChannelID);
    }
}

module.exports = voiceStateUpdateListener;
