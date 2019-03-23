const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**ÇEKİLİŞ BOT sunucunuza eklendi!** `g!yardım` Komutlarıma erişmek için..',
  '**ÇEKİLİŞ BOT* sunucunuzdaki insanlara kolaylıklar sağlar.',
  'NOT : Bu yazı sadece **Sunucu Sahibine** Gönderilmiştir',
  `**ÇEKİLİŞ BOT Resmî Discord Sunucusu** https://discord.gg/znqhyG2`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})