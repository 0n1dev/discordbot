const Discord = require('discord.js');
const { Command } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../config.json'));

const guilds = ['305654198341730304', '334858657785184256', '334877020364341251', '334877121761771520', '333576528686219266'];

class UnbanCommand extends Command {
    constructor() {
        super('unban', {
           aliases: ['해제', 'unban'],
           userPermissions : 'BAN_MEMBERS',
           args: [
             {
               id: 'member',
               type: 'string',
             }
           ],
           channelRestriction: 'guild'
        });
    }

    async exec(message, args) {
      const msgargs = message.content.split(" ").slice(1);
      var reason = msgargs.slice(1).join(" ");
      if(!reason){
        reason="없음.";
      }

      if(!args.member){
        return message.reply('유저ID를 입력해주세요.');
      }

      message.guild.members.unban(args.member)
      .then(function(user) {
        var adminchannel = message.guild.channels.cache.get(config.adminchannel);
        var userchannel = message.guild.channels.cache.get(config.userchannel);

        const embed = new Discord.MessageEmbed()
        .setTitle('해제(UNBAN)')
        .setDescription(user.id)
        .setAuthor(user.username + "#" + user.discriminator, user.avatarURL)
        .setColor(0x42f498)
        .setTimestamp(new Date())
        .addField("처리자", message.author.username + '#' + message.author.discriminator)
        .addField("사유", reason);

        adminchannel.send({embed});
        userchannel.send({embed});
      })
      .catch(console.error);

      message.delete();
    }
}
module.exports = UnbanCommand;
