const Discord = require("discord.js")
const fs = require('fs')

const client = new Discord.Client()
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


client.on("ready", () => {
    console.log("ready...")
})



client.on("message", message => {
    if(message.author.bot) return

    //会話とかとか
    if(message.content.startsWith("いお")) {
        message.channel.send("(#^^#)")
    }

    //コマンド系
    if(message.content.startsWith("/")) {
        const args = message.content.slice(1).trim().split(/ +/)
        switch(args[0]) {
            case 'title': 
                if(!args[1]) {
                    message.reply("引数が足りません")
                    return
                }
                console.log("1")
                message.guild.channels.cache.filter(c => c.type == 'voice')
                    .filter(c => c.members.get(message.author.id))
                    .first()
                    .setName("title:" +  encodeURI(args[1]))
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                console.log("2")
                // console.log(message.guild.channels.cache.filter(c => c.type == 'voice').filter(c => c.members.get(message.author.id)).first())
                message.delete()
                break;
            default:
                break;
        }
    }

})


client.login(config.token)