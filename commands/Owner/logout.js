  function logout(message,prefix,client){

if (message.content.startsWith(prefix + "logout")) {

if(message.author.id == "240508683455299584"){

        message.reply("Arrêt en cour");

        console.log('Je suis off');

        client.destroy();

        process.exit()

    } else {

    message.channel.send("Pour quoi vouloir m'éteindre ;-;")
  }
}
}

module.exports = logout