const Discord = require('discord.js');
const { Command } = require('discord-akairo');

class StatsCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['상태'],
            channelRestriction: 'guild',
            userPermissions : 'ADMINISTRATOR'
        });
    }

    exec(message) {
        function msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? + hours : hours;
        minutes = (minutes < 10) ? + minutes : minutes;
        seconds = (seconds < 10) ? + seconds : seconds;

        return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
        }
        let uptime= msToTime(this.client.uptime)
        message.guild.members.fetch()
	    .then(function(r) {
            console.log(message.guild.members.cache.size);
	    })
	    .catch(console.error);
    }
}

module.exports = StatsCommand;
