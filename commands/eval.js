const { Command } = require('discord-akairo');

class Eval extends Command {
  constructor() {
    super('eval', {
      aliases: ['eval'],
      ownerOnly: true,
      args: [
        {
          id: 'content',
          match: 'rest'
        }
      ]
    });
  }
  exec(m, args) {
    try {
      return m.channel.send(`\`\`\`js\n${Array.from(eval(args.content))}\n\`\`\``);
    } catch (e) {
      return m.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
  }
}

module.exports = Eval;
