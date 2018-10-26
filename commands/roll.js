exports.run = (client, message, args) => {
  if (args === undefined) {
    let sides = 6
  } else {
    let sides = args
  }
  if (sides <= 20 || sides >= 6) {
    let result = Math.floor(Math.random() * sides) + 1;
    message.reply(`you got a ${result}.`).catch(console.error);
  } else {
    message.reply('please enter a number between 6 and 20.').catch(console.error);
  }
};