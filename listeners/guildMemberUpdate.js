const { Listener } = require('discord-akairo');

class GuildMemberUpdateListener extends Listener {
    constructor() {
        super('guildMemberUpdate', {
            emitter: 'client',
            eventName: 'guildMemberUpdate'
        });
    }

    exec(oldMember, newMember) {
    }
}

module.exports = GuildMemberUpdateListener;
