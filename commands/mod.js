exports.run = (client, message, args) => {
  const modRole = "505412861603086356"
  if (message.member.roles.has(modRole)) {
    let memberToMod = message.mentions.members.first();
    // Need to implement check to see if member has that role
    memberToMod.addRole(modRole).catch(console.error)
    message.reply("you have modded " + memberToMod + ".")
  } else {
    message.reply("you don't have the required permissions to do that.")
  }
};