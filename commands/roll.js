exports.run = (client, message, args) => {
  const sides = 6;
  message.reply(`you got a ${Math.floor(Math.random() * sides) + 1}.`).catch(console.error);
};