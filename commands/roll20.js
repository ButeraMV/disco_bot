exports.run = (client, message, args) => {
  message.reply(`you got a ${Math.floor(Math.random() * 20) + 1}.`).catch(console.error);
};