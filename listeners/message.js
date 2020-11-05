const Discord = require('discord.js');
const { Listener } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../config.json'));

const regex = /discord(?:app\.com|\.gg)(?:\/invite\/|\/)(.[a-zA-Z0-9\-]{2,32})/g;
const allowguilds = ['305654198341730304', '334858657785184256', '334877020364341251', '334877121761771520', '333576528686219266', '573450986782326786'];

class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(msg) {
        regex.lastIndex = 0;
        var inviteCode = regex.exec(msg.content);
        if(msg.content.indexOf('www.게임핵.com')!='-1' || msg.content.indexOf('벤츠샵.com')!='-1' || msg.content.indexOf('핵판다.COM')!='-1' || msg.content.indexOf('xn--2j1b232dsub.com')!='-1' || msg.content.indexOf('rmmacro')!='-1' || msg.content.indexOf('xn--yh4bv0f9tq')!='-1' || msg.content.indexOf('씨포샵')!='-1' || msg.content.indexOf('http://xn--')!='-1'){
          var guildMember = msg.guild.members.cache.get(msg.author.id);

          if(guildMember) {
            guildMember.ban({ days: 7, reason: '핵 홍보' })
            .then(console.log)
            .catch(console.error);
          }
          msg.delete();
        }

        if(inviteCode){
            this.client.fetchInvite(inviteCode[1])
            .then(function(r){
              if(allowguilds.indexOf(r.guild.id) == '-1'){
                msg.delete();
                msg.author.createDM()
                .then(function(dm){
                  const embed = new Discord.MessageEmbed()
                    .setTitle('벤(BAN)')
                    .setDescription(msg.author.id)
                    .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.avatarURL)
                    .setColor(0xf44141)
                    .setTimestamp(new Date())
                    .addField("처리자", 'ColorPig#9797(봇)')
                    .addField("사유", r.guild.name + ' 홍보.');
                  dm.send(embed);
                })
                .catch(function(err){
                  console.log(err.message);
                });

                var guildMember = msg.guild.members.cache.get(msg.author.id);
                
                if (guildMember) {
                  guildMember.ban({ days: 7, reason: '타 디스코드' })
                  .then(function() {
                    var adminchannel = msg.guild.channels.cache.get(config.adminchannel);
                    var userchannel = msg.guild.channels.cache.get(config.userchannel);
                    
                    const embed = new Discord.MessageEmbed()
                    .setTitle('벤(BAN)')
                    .setDescription(msg.author.id)
                    .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.avatarURL)
                    .setColor(0xf44141)
                    .setTimestamp(new Date())
                    .addField("처리자", 'ColorPig#9797(봇)',true)
                    .addField("언급", `<@${member.id}>`,true)
                    .addField("사유", r.guild.name + ' 홍보.');

                    adminchannel.send(embed);

                    const embed2 = new Discord.MessageEmbed()
                    .setTitle('벤(BAN)')
                    .setDescription(msg.author.id)
                    .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.avatarURL)
                    .setColor(0xf44141)
                    .setTimestamp(new Date())
                    .addField("처리자", 'ColorPig#9797(봇)',true)
                    .addField("언급", `<@${member.id}>`,true)
                    .addField("사유", '타 디스코드 홍보.');

                    userchannel.send(embed2);
                  })
                  .catch(console.error);
                }
              }

              if(msg.channel.name.indexOf("teaminvite") == '-1' && msg.author.id != '257825765528174593'){
                return msg.delete();
              }
            })
            .catch(function(e){
              console.log(e.message);
              if(e.message == 'Unknown Invite'){
                //msg.delete();
              }
            });
        }
    }
}

module.exports = MessageListener;
