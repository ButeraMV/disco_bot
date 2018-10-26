exports.run = (client, message, args) => {
  message.reply(`you got a ${Math.floor(Math.random() * 6) + 1}.`).catch(console.error);
};