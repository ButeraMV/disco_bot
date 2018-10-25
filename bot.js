require("dotenv").config()

const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json")
client.config = config

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.BOT_KEY);

client.on(`ready`, () => {
  console.log(`I am ready!`);
});

client.on(`message`, (message) => {
  // Exit and stop if message is sent by a bot
  if (message.author.bot) return;
  // Exit and stop if prefix is not included
  if (message.content.indexOf(config.prefix) !== 0 ) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === `ping`) {
    message.channel.send(`pong!`);
  }

  if (command === `foo`) {
    message.channel.send(`bar!`);
  }
});

