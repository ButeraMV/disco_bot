module.exports = (client) => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} server(s), for a total of ${client.users.size} users.`);
};