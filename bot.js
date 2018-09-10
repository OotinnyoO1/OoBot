const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
	console.log(`Logged in as ${Client.user.tag}`);
});

Client.on('message', message => {
	if (message.content === 'Ooapply') {

//Generate code
// X
// NOTE: These code snippets may need changes to work in your actual program, and they may not even be correct. Do NOT just copy and paste them in without understanding what they mean.
const embed = {
  "title": "Apply for coder!",
  "description": "Applying for coder gives you more benefits on this [server](https://discord.gg/a2XVRZU)",
  "color": 13989631,
  "timestamp": "2018-08-04T23:53:42.226Z",
  "footer": {
    "text": "Apply for coder!"
  },
  "fields": [
    {
      "name": "Applying...",
      "value": "Applying for coder will give you more benefits on the server where the bot was first tested in, such as audit logs, deafening members, muting members, and original members commands!"
    },
    {
      "name": "Should you abuse coder role?",
      "value": "Abusing coder role makes you make me get the privilege to take the coder role away from your account, applying another time and abusing it again, will result in taking it away and denying your submission every time your submission is applied."
    },
    {
      "name": "Apply for coder!",
      "value": "Apply for coder!",
      "inline": true
    },
    {
      "name": "Do not abuse coder role.",
      "value": "Do not abuse coder role.",
      "inline": true
    }
  ]
};
message.reply("Apply for coder form is down here!", { embed });
	}
});

Client.on('message', message => {
	if (message.content === 'Ooannouncement1') {

//Generate code
// X
// NOTE: These code snippets may need changes to work in your actual program, and they may not even be correct. Do NOT just copy and paste them in without understanding what they mean.
const embed = {
  "title": "Announcements! This server is now a OoBot support server!",
  "description": "This is now a [server](https://discord.gg/a2XVRZU) that can help with OoBot problems, stating problems here.",
  "color": 13989631,
  "timestamp": "2018-08-04T23:53:42.226Z",
  "footer": {
    "text": "OoBot support server!"
  },
  "fields": [
    {
      "name": "Support server for OoBot",
      "value": "This is a support server that may fix things the bot OoBot has, this server has testing for OoBot, so simply make something that is wrong about a command, we test it, then, it will be fixed soon."
    },
    {
      "name": "Support Server!",
      "value": "Main OoBot server.",
      "inline": true
    },
    {
      "name": "Bot of multipurpose.",
      "value": "A bot containing multipurpose commands.",
      "inline": true
    }
  ]
};
message.channel.send("Announcements!", { embed });
	}
});

Client.login('NDYzMzI0NDkxMjc2MjIyNDY1.DjjW2Q.JNfL7-1Gzkv0uKXwWaFl2Ib-vc4');
