exports.run = (client, message, args) => {
  let helpMessage = "```\nCommands:\n\n!gif -> Requires additional text after the command to search Giphy for a gif\n!roll -> Roll a 6 sided die\n!roll20 -> Roll a 20 sided die```"
  message.channel.send(helpMessage).catch(console.error);
};