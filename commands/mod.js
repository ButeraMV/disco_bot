exports.run = (client, message, args) => {
  const modRole = "505412861603086356"
  if (message.member.roles.has(modRole)) {
    let memberToMod = message.mentions.members.first();
    memberToMod.addRole(modRole).catch(console.error)
  } else {
    message.reply("you don't have the required permissions to do that.")
  }
};