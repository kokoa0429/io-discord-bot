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
                message.guild.channels.cache.array().filter(c => c.type == 'voice').filter(c => c.members.get(message.author.id))[0].edit({ name: 'new-channel' })
                console.log(message.guild.channels.cache.array().filter(c => c.type == 'voice').filter(c => c.members.get(message.author.id))[0].name)
                message.delete()
                break;
            default:
                break;
        }
    }

})


client.login(config.token)