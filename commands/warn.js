const Discord = require('discord.js');
const { Command } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../config.json'));

const guilds = ['305654198341730304', '334858657785184256', '334877020364341251', '334877121761771520', '333576528686219266'];

class WarnCommand extends Command {
    constructor() {
        super('warn', {
           aliases: ['경고', 'warn'],
           userPermissions : 'BAN_MEMBERS',
           args: [
             {
               id: 'member',
               type: 'member',
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
      message.delete();
      var adminchannel = message.guild.channels.cache.get(config.adminchannel);
      var userchannel = message.guild.channels.cache.get(config.userchannel);

      const embed = new Discord.MessageEmbed()
        .setTitle('경고(WARN)')
        .setDescription(args.member.id)
        .setAuthor(args.member.user.username + "#" + args.member.user.discriminator, args.member.user.avatarURL)
        .setColor(0xf44141)
        .setTimestamp(new Date())
        .addField("처리자", message.author.username + "#" + message.author.discriminator,true)
        .addField("언급", `<@${args.member.id}>`,true)
        .addField("사유", reason);
      adminchannel.send({embed});
      userchannel.send({embed});

      args.member.createDM()
      .then(function(dm){
        dm.send(embed);
      })
      .catch(function(err){
        console.log(err.message);
      });

    }
}
module.exports = WarnCommand;
