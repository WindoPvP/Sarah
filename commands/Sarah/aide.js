function aide(message,prefix,client){
if (message.content.startsWith(prefix + "aide")) {
message.channel.send("Je suis un bot de **modération** très fluide et très rapide, pour avoir accès à mes commandes, il vous suffit d'avoir la permission ``gerer le serveur``.\nPour m'inviter dans votre serveur, faites ``"+prefix+"invite``\n\n**Mes commandes** :robot:\n\n\n``purge``, ``embed``, ``mute``, ``unmute``, ``kick``, ``ban``, ``warn``, ``seewarns``, ``clearwarns``, ``addrole``, ``rmrole``");
    }
}
    module.exports = aide
