function invite(message,prefix,client){
if (message.content.startsWith(prefix + "invite")) {
message.channel.send("Vous pouvez m'inviter dans votre serveur avec ce lien: <https://discordapp.com/oauth2/authorize?client_id=392754374285459467&scope=bot&permissions=2097176631>");
    }
}
    module.exports = invite