exports.run = (client, message, args) => {
  let helpMessage = "```**Here are a list of commands you can use:**\n_!gif_ Requires additional text after the command to search Giphy for a gif```"
  message.channel.send(helpMessage).catch(console.error);
};