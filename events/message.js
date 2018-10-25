module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with prefix
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Define args and command
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If command doesn't exist, exit silently
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};