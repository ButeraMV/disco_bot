exports.run = (client, message, args) => {
  let helpMessage = "```css\nCommands:\n\n!gif -> Requires additional text after the command to search Giphy for a gif\n```"
  message.channel.send(helpMessage).catch(console.error);
};