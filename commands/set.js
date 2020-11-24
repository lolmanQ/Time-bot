const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	//this is where the actual code for the command goes
	
	if(args[0] == "timezone"){
		let roleName = "";
		
		switch (args[1]) {
			case "0":
				roleName = "GMT";
				break;
			case "+1":
				roleName = "GMT +1";
				break;
		
			default:
				roleName = "GMT";
				break;
		}
		try {
			var role = message.guild.roles.find(role => role.name == roleName);
			message.member.addRole(role);
			message.delete();
			return message.reply("Successs").then(m => m.delete(10000));
		} catch (error) {
			console.log("set timezone, failed to find role");
			console.log(error);
			return message.reply("The command failed").then(m => m.delete(10000));
		}
		
	}
	return;
}
//name this whatever the command name is.
module.exports.help = {
  name: "set"
}
