const Discord = require("discord.js");
const client = new Discord.Client();

let request = require('request');

client.on("ready", () => {
   client.user.setActivity('Bot By Clayne')
   console.log(`${client.user.tag} now online!`)
});

client.on("message", async message => {
  let prefix = "r!";
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

//command

if (command === "reader") {
   let ip = args[0];

   if(!ip)
     return message.channel.send("Please input the ip!")
try {
request.post(`http://${ip}/growtopia/server_data.php`, function(err, response, body) {
   message.channel.send(`Result from ${ip}`)
   message.channel.send(`\`\`\`css\nResult\n${response && response.statusCode}\n${body}\`\`\``)
  })
 } catch (err) {
   return message.channel.send(err)
 }
}

});
client.login("Your bot token here")
