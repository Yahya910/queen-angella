const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*اسم البوت:ايانوكوجي*
 
◼◼❏❏©【👑dᥱᥲdᥣყ࿇OTAKU🔱悪】

 *مطور البوت : wa.me/212690762206?text=Hii%20help%20karanna%20kemathida%20Oya%20Neda%20owner%20Sir.%20*

 *تحقق من تحديتات .update   To update Bot .update now*

 *طريقة صنع البوت : https://www.youtube.com/channel/UC2hESq6BCRCU-LKpl7Oq8g*
     
 *انستا غرامي: https://www.instagram.com/_kopz__?utm_medium=copy_link*

 *موقع المطور : website coming soon*

 *رابط GITHUB : https://github.com/Yahya910/queen-angella*

 *ايانوكوجي بوت من تطوير و صنع يحيى تحقق من تحديث و استمتع*

 ◼◼❏❏©drips ®ᵏⁱⁿᵍ ᴵˢᵘʷᵃ
`}) 

}));
