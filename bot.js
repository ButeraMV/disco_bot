require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  // Exit and stop if prefix is not included
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }

  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(process.env.BOT_KEY);