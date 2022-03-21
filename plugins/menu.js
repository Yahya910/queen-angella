const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/TH6qPjC/king.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━✨️*𝙠𝙞𝙣𝙜 𝙞𝙨𝙪𝙬𝙖*✨️━━━⛦


*مرحبا كونيتشوا انا بوت متعدد الميزات.
            *ايانوكوجي*

■□■□■□■□■□■□■□■□■□■□
♕ *أوامر الميديا* ♕

🇱🇰✑╟ الامر➜ -song <text>
💠✑╟ العمل➜ Downloads song for you.
⚠️.song  baby love

🇱🇰✑╟ الامر➜ -video <yt link>
💠✑╟ العمل➜ Downloads video from YouTube link.

🇱🇰✑╟ الامر➜ -insta <link>
💠✑╟ العمل➜   Downloads content from instagram.

🇱🇰✑╟ الامر➜  -yt<text>
💠✑╟ العمل➜   Gives you YT links.

🇱🇰✑╟ الامر➜  -show <show name>
💠✑╟ العمل➜   Get info related to tv series and shows.

🇱🇰✑╟ الامر➜ -gif 
💠✑╟ العمل➜ Converts video to gif.

🇱🇰✑╟ الامر➜ -tomp3 
💠✑╟ العمل➜ Converts video into audio.

🇱🇰✑╟ الامر➜ -say <text>
💠✑╟ العمل➜ Converts text into voice.

🇱🇰✑╟ الامر➜ -img <text>
💠✑╟ العمل➜ It sends image from google.

🇱🇰✑╟ الامر➜ -trt <language code>
💠✑╟ العمل➜ Translate the text you tag.

🇱🇰✑╟ الامر➜ -wiki <text>
💠✑╟ العمل➜ It sends Wikipedia result.

🇱🇰✑╟ الامر➜ -lyric <text>
💠✑╟ العمل➜ Finds the lyrics of the song.

🇱🇰✑╟ الامر➜ -covid <country code>
💠✑╟ العمل➜ Send the covid stats of your country.

🇱🇰✑╟ الامر➜ -weather <city>
💠✑╟ العمل➜ Tells you about the weather of your place.

🇱🇰✑╟ الامر➜ -removebg 
💠✑╟ العمل➜ Removes the background of tge image.

🇱🇰✑╟ الامر➜ -ocr
💠✑╟ العمل➜ Finds the text written on the image.

🇱🇰✑╟ الامر➜ -wallpaper
💠✑╟ العمل➜ It sends you random wallpaper.

■□■□■□■□■□𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

🇱🇰✑╟ الامر➜ -joke 
💠✑╟ العمل➜ It sends a random joke.
 
🇱🇰✑╟ الأمر➜ -meme <text>
💠✑╟ العمل➜ Cations the image into a meme.

🇱🇰✑╟ الامر➜ -quote 
💠✑╟ العمل➜ It sends a random quote.

🇱🇰✑╟ الامر➜ -ss <website link>
💠✑╟ العمل➜ It sends the screenshot of the website.

🇱🇰✑╟ الامر➜ -changesay <text>
💠✑╟ العمل➜ Converts text into changesay meme image.

🇱🇰✑╟ الامر➜ -trumpsay
💠✑╟ العمل➜ Convert text into Trump's tweet.

🇱🇰✑╟ الامر➜ -compliment 
💠✑╟ العمل➜ Gives you a compliment.

🇱🇰✑╟ الامر➜  -bitly <link>
💠✑╟ العمل➜   Shorten your link.

🇱🇰✑╟ الامر➜  -dict 
💠✑╟ العمل➜   Dictionary [-dict en;anime]

🇱🇰✑╟ الامر➜  -zodiac <leo> 
💠✑╟ العمل➜   Tells you about your horoscope.

🇱🇰✑╟ الامر➜  -qr <text>
💠✑╟ العمل➜   Converts text into qr code.

🇱🇰✑╟ الامر➜  -movie 
💠✑╟ العمل➜  Gives you info about movie.
⚠️movie master

🇱🇰✑╟ الامر➜  -anime <text>
💠✑╟ العمل➜  Gives you info about anime.
⚠️anime isuwa
■□■□■□■□■𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

🇱🇰✑╟ الامر➜ -sticker 
💠✑╟ العمل➜ Converts img/gif into a sticker.

🇱🇰✑╟ الامر➜ -photo 
💠✑╟ العمل➜ Converts sticker into image.

🇱🇰✑╟ الامر➜ -attp <text>
💠✑╟ العمل➜ Converts text into glowing sticker.
⚠️ex  .attp isuwa
■□■□■□■□■□■□■□■□■□■□
═════💢𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐑𝐔💢═════
▣▣▣▣▣▣▣▣▣KING ISURU▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
