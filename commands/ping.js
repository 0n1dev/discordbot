const Discord = require('discord.js');
const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['핑', 'ping'] ,
           userPermissions : 'BAN_MEMBERS'
        });
    }

    async exec(message) {
      message.delete();
      const m = await message.channel.send(`서버와 네트워크 속도 계산중...`);
      m.delete()
        var embed = new Discord.MessageEmbed()
         .setColor(0x26d6b0)
         .setTitle(":ping_pong: 퐁!")
         .addField("API 서버 : ", `${Math.round(this.client.ping)}ms`, true)
         .addField("네트워크 : ", `${Math.round(m.createdTimestamp - message.createdTimestamp)}ms`, true)
        return message.channel.send({embed})
      }
}
module.exports = PingCommand;
