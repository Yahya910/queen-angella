const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/TH6qPjC/king.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━✨️*💞 𝙠𝙞𝙣𝙜 𝙞𝙨𝙪𝙬𝙖*✨️━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 💞 𝙠𝙞𝙣𝙜 𝙞𝙨𝙪𝙬𝙖 𝐛𝐨𝐭.
            *𝙠𝙞𝙣𝙜 𝙞𝙨𝙪𝙬𝙖*

■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

🇱🇰✑╟ කමාන්ඩ්➜ -song <text>
💠✑╟විස්තරය➜ Downloads song for you.
⚠️.song  baby love

🇱🇰✑╟ කමාන්ඩ්➜ -video <yt link>
💠✑╟විස්තරය➜ Downloads video from YouTube link.

🇱🇰✑╟ කමාන්ඩ්➜  -insta <link>
💠✑╟විස්තරය➜   Downloads content from instagram.

🇱🇰✑╟ කමාන්ඩ්➜  -yt<text>
💠✑╟විස්තරය➜   Gives you YT links.

🇱🇰✑╟ කමාන්ඩ්➜  -show <show name>
💠✑╟විස්තරය➜   Get info related to tv series and shows.

🇱🇰✑╟ කමාන්ඩ්➜ -gif 
💠✑╟විස්තරය➜ Converts video to gif.

🇱🇰✑╟ කමාන්ඩ්➜ -tomp3 
💠✑╟විස්තරය➜ Converts video into audio.

🇱🇰✑╟ කමාන්ඩ්➜ -say <text>
💠✑╟විස්තරය➜ Converts text into voice.

🇱🇰✑╟ කමාන්ඩ්➜ -img <text>
💠✑╟විස්තරය➜ It sends image from google.

🇱🇰✑╟ කමාන්ඩ්➜ -trt <language code>
💠✑╟විස්තරය➜ Translate the text you tag.

🇱🇰✑╟ කමාන්ඩ්➜ -wiki <text>
💠✑╟විස්තරය➜ It sends Wikipedia result.

🇱🇰✑╟ කමාන්ඩ්➜ -lyric <text>
💠✑╟විස්තරය➜ Finds the lyrics of the song.

🇱🇰✑╟ කමාන්ඩ්➜ -covid <country code>
💠✑╟විස්තරය➜ Send the covid stats of your country.

🇱🇰✑╟ කමාන්ඩ්➜ -weather <city>
💠✑╟විස්තරය➜ Tells you about the weather of your place.

🇱🇰✑╟ කමාන්ඩ්➜ -removebg 
💠✑╟විස්තරය➜ Removes the background of tge image.

🇱🇰✑╟ කමාන්ඩ්➜ -ocr
💠✑╟විස්තරය➜ Finds the text written on the image.

🇱🇰✑╟ කමාන්ඩ්➜ -wallpaper
💠✑╟විස්තරය➜ It sends you random wallpaper.

■□■□■□■□■□𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

🇱🇰✑╟ කමාන්ඩ්➜ -joke 
💠✑╟විස්තරය➜ It sends a random joke.
 
🇱🇰✑╟ කමාන්ඩ්➜ -meme <text>
💠✑╟විස්තරය➜ Cations the image into a meme.

🇱🇰✑╟ කමාන්ඩ්➜ -quote 
💠✑╟විස්තරය➜ It sends a random quote.

🇱🇰✑╟ කමාන්ඩ්➜ -ss <website link>
💠✑╟විස්තරය➜ It sends the screenshot of the website.

🇱🇰✑╟ කමාන්ඩ්➜ -changesay <text>
💠✑╟විස්තරය➜ Converts text into changesay meme image.

🇱🇰✑╟ කමාන්ඩ්➜ -trumpsay
💠✑╟විස්තරය➜ Convert text into Trump's tweet.

🇱🇰✑╟ කමාන්ඩ්➜ -compliment 
💠✑╟විස්තරය➜ Gives you a compliment.

🇱🇰✑╟ කමාන්ඩ්➜  -bitly <link>
💠✑╟විස්තරය➜   Shorten your link.

🇱🇰✑╟ කමාන්ඩ්➜  -dict 
💠✑╟විස්තරය➜   Dictionary [-dict en;anime]

🇱🇰✑╟ කමාන්ඩ්➜  -zodiac <leo> 
💠✑╟විස්තරය➜   Tells you about your horoscope.

🇱🇰✑╟ කමාන්ඩ්➜  -qr <text>
💠✑╟විස්තරය➜   Converts text into qr code.

🇱🇰✑╟ කමාන්ඩ්➜  -movie 
💠✑╟විස්තරය➜  Gives you info about movie.
⚠️movie master

🇱🇰✑╟ කමාන්ඩ්➜  -anime <text>
💠✑╟විස්තරය➜  Gives you info about anime.
⚠️anime king isuwa
■□■□■□■□■𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

🇱🇰✑╟ කමාන්ඩ්➜ -sticker 
💠✑╟විස්තරය➜ Converts img/gif into a sticker.

🇱🇰✑╟ කමාන්ඩ්➜ -photo 
💠✑╟විස්තරය➜ Converts sticker into image.

🇱🇰✑╟ කමාන්ඩ්➜ -attp <text>
💠✑╟විස්තරය➜ Converts text into glowing sticker.
⚠️ex  .attp isuwa
■□■□■□■□■□■□■□■□■□■□
═════💢𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐑𝐔💢═════
▣▣▣▣▣▣▣▣▣KING ISURU▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
