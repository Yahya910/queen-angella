/* Copyright (C) 2021 isuwabrooo.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const LizaMwol = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


LizaMwol.addCommand({pattern: 'Novel', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '.𝙉𝙊𝙑𝙀𝙇1', description: "\n\n╭*මීන නුවන් 01*\n     🧎🏻‍♀️❤️🧎\n★✼☆｡☆✼⁀➷★✼☆｡\n\n\n🧍චූටී😲😲😲.....ඒයි මේ....තමුසෙ අද  ක්ලාස් යන්නෙ නැද්ද ඕයි?......\n\nයනවනම් එනව ඉක්මනට සදළුතලෙන් බිමට බැහැල... මට ඔෆිස් යන්නත් පරක්කු වෙලා ....\n\nඅවදිවන්න අවදිවන්න දීප්තිමත් දිනකි උදා වෙලා තියෙන්නේ....ඕ ඕ ......යේ💃\n\nඔන්න ඉතිම් සින්දුවකුත් කියාගෙන ටවල් එක කරේ දාගෙන බාත්රූම් එකට දුවන්න හැදුවා විතරයි.\n\nබෑනෙ මේ මෝඩ සහෝදරයා එක්ක😤😒\n\n\n ඔහොම ඉන්නව මෝඩස් ...\n\nමේ ලෑස්ති වෙලා ඉවරායි"...😒\n\n"මොකද දෝණි හැමදාම පරක්කු වෙන්නෙ. අයියට ඔෆිස් යන්නත් පරක්කු වෙනව...\n\nඒ මගෙ ආදරණීය මව්තුමිය🙈 මිසිස් සන්ද්‍යා වික්‍රමසිංහ ....ඒ කියන්නේ මිස්ට යොහාන් වික්‍රමසිංහ ගෙ ප්‍රිය බිරිද🤭 \nඅම්මෝ එයා නම්....තනිකරම බෙලිකටු මල්ලක් ඔහොම හිටියට ..බ්ලා බ්ලා බ්ලා👻👻👻👻\n\n(ආ....හෝව් හෝව් හෝව්.....😬😬🤭🤭ඉන්න ටිකක් මං ගැන කියන්න...\n\nමමද.....ම්ම්ම්...මම ඇවිල්ලා එකෙන්ම මොංගල් සීන් එකේ ඉන්නෙ🙈කොයි වෙලේ බැලුවත් කාට හරි බාල්දියක් පෙල්ලන්නමයි බලන්නෙ🤓🤓🤓නෑහ්....ඉතිම්ම්ම්.....ටිකයි ටිකයි...ස්පෙශලි මගෙ අයියණ්ඩිය වෙච්චි මිස්ට\nඅවිලාශ්  දෙව්නක වික්‍රමසිංහට ....😘මම ඉතිම් එයාළගෙ සූටි ගෙදර ඉන්න එකම සූට්ටන් දෝණි🙈🙈නේහා....😋)\n\nඉක්මනට අතට අහුවෙච්ච ඩෙනිම් එකට ටී එකකුත් දාගෙන බෑග් එකත් උස්සන් දිව්වා ඉතිම් පහළට තත්පරේට කිලෝමීටර් විසි පහක විතර වේගෙන්...😌\n\n අයියෝ ....සන්ද්‍යා ....මේහ්.. බලන්නකො...දෝණි ඔයා නම්😡😡 .....\n\nමිල්ක් ෆාදර්ට ඩෝග්ස්ලා බාකිං කිව්වලු😱😟\nහප්පට සිරි ඇනුනා නේද ආපු පාරට තාත්තිගෙ ඇගේ😫😫😫(😂)\n\nඇදුම පුරාම අපෙ මිසිස් සන්ද්‍යා මැඩම් අපේ තාත්‍තිට හදන කුක්කු එක...😫\n\nදැන් ඉතිම් මොන ක්ලාස්ද අෆ්ෆා....😤\n\nඅයියේ....ඔයා යන්න..මම අද ක්ලාස් යන්නෑ..."'කියාගෙනම කාමරේට ගිහිම් තිබ්බ කේන්තියට දොරත් වැහුවා හයියෙන්ම😒\n\nංං දඩාස්.....ංං\n\nක්ලාසුත් නැති එකේ දැම්මා මගෙ අතිජාත මිතුරිය වෙච්ච දිනිතියට මැගක්🤓...\n\n📲 ado gs gembi.koheda inne.\n\n📲mkd yko me ude pandara baliyanne.inna diymko\n\nපුහ්😒😒මේකිගෙ ගනං...\nඅපි සැලෙයි ඕවට😹\n\n📲 eka nevei bm anna ubage raja kumaraya ada library enawalu.\n\nඔන්න ඉතිම් මම අතෑරියෙ නෑ🙈කෙලියා ටොම් පචයක්...\n\n📲 eh adoo ..sirada kiyanne bm.ane bm api ymko ...plz  mnika....plzzz....\n\n\nඔන්න ආවා මන් හිතපු රිප්ලයි එක ඒ විදියටම🙈🙈😂 \n\n........................................\n\nඉතුරු ටික ඉතිම් හෙට😉මොකෝ කියන්නෙ කතාව අවුල් වගේද..අවුල් වගේ නම් ඉස්සරහට ලියන්නෙ නැහැ...comment එකක් දාගෙන යන්න කස්ටිය අනිවා...😊❤️\n\n\nසෙව්...😊❤\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉️ \n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣", rowId:" rowid1"},
        {title: '.𝙉𝙊𝙑𝙀𝙇2', description: "*මීන නුවන් 02*\n       🧎🏻‍♀️❤️🧎\n( අසීමාන්තික ආදරයේ උත්තරීර ආමන්ත්‍රණය ....)\n\n★✼☆｡☆⁀➷★✼☆｡\n\nඔන්න ඉතිම් උදේ පාන්දරම ක්ලාස් එකත් මිස් උන එකේ මගේ සෝමාලියාවටත් එහා ගිය සයිබීරියානු බන්ඩියට අපෙ අම්මියගෙ අතින් හදන සස... කෑමත්🍝 බන්ඩි ෆුල් වෙන්නම දාගෙන  සෙට් උනා දිනිතියත් එක්ක ලයිබ්‍රි  එකට යන්න....📚 \n\n\nඇදුමක් දාගෙන පහළට ආවා විතරයි මෙන්න යකෝ අම්මා පටන් ගත්තා ඉතිම්😕\n\n\n ඒයි.....මේ බලන්නකො...ක්ලාස් එකත් කට් කරන් උදේ පාන්දරම කුමාරිහාමි රස්තියාදුවෙ යන්නයි ලෑස්තිය 😤.....\n\n\nඅප්පච්චිනම් ඇහුන්නෑ වගේ හිටියෙ එයා දන්නව මං එහෙම නරක වැඩ කරන්නැති සූටි බබෙක් කියලා🙄🤭🤭\n\n\n අනේ ඇත්තටම ඒයි ඔයාටත් මං කියන දේවල් තමා ............😲😲(මෙයා සූටියට බතලයක් වගේ හිටියට කට.....අම්ම්මෝ😱අපි ඔක්කොම ඉතිම් බයයි ...මං හිතන්නෙ තාත්තිත් අම්මිගෙ කට නිසාම තමා මෙච්චර සයිලන්ට්🤭)\n\n\nඅම්මා තව මොන මොනවාද ටිකක් කියල තාත්තිටත් බනිනවා වගේ කියල යාන්තම් ඇහුනා ගේට් එකෙන් එළියට යද්දිම....සින් ගාල මාරු උනේ එතන වැඩි වෙලා හිටියනම් මටත් ඉතිම් සොරි.කොම් වෙන නිසා 🙁\n\n\nකොහොමින් කොහොමහරි දිනිතියයි තව බටු මීච්චියො දෙන්නෙකුයි එක්ක ලයිබ්‍රියට ගියාට මොකද ,අර පිස්සු හෝන්තුව හොයන්නෙම \nඒකිගෙ පරම පිවිතුරු පූජනීය ආදරවන්තයා...සමීර අයියව 😒\n\n\n ඒහ්....මොකෝ බන් ...හතර වටේටම ඇන්ටනාව කරකවන්නෙ..කාවද හොයන්නෙ ?\n\n\n ආ....නෑහ් බං...පිස්සුද \nමං මේ නිකම් බැලුවේ...හී.... \n\n\nපුහ්...යකෝ මේකි..මටත් බෝලෙ බස්සන්න කල්පනාව😏\nමං මේකිට බොරු කිව්වෙ කියල දන්නවනම්....😢😢හපෝයි සාන්ත...\n\nඔහොම හිතල ඕනි මගුලක් කර ගනිම් කියල පිටිපස්ස හැරිලා බැලුවා විතරයි😥හප්පට යකෝ....\n\nසමීර අයිය ඇත්තටම ඇවිත් කියාම්කො🤓\nඒ ඔක්කොම හරි කියමුකො.ඒත් සමීර අයියත් එක්ක හිටපු අනිත් එකා දැක්කමනම් ...😮\n\nලයිබ්‍රියෙ ඉන්නෙ කියන එකත් අමතක වෙලා තප්පරේට කිලෝමීටර් සීයක විතර වේගෙන් දුවන්න.......🏃‍♀🏃‍♀🏃‍♀\n\n\n(හෝව් .....හෝව් හෝව්....දිව්වෙ නෑ...හිතුව විතරයි ඉතිම්)🤓\n\n\nනේහා මෙච්චරටම බයවෙන්න එයා කාවද දැක්කෙ🤔 \n\nගෙස් කරන්න බලන්න කස්ටිය☺️\n\n\n\n\n\nඔන්න ඉතිම් චූටි ✨ Episode එකක්  දුන්නා....හෙට දෙන්නම් දිග එකක් ...😜❤️\n\n\n\nමොකෝ කියන්නෙ  අවුල් වගේද😉  කස්ටිය ගොඩක් කිව්වා ලස්සනයි දිගටම ලියන්න කියලා 🥰🥰\n\n\nකමෙන්ට් කරන අයටයි කතාව කියවන අයටයි තෑන්ක්ස් හරිද❤️ \n\nහැබැයි ඉතිම් සූටි කමෙන්ට් එකක් හරි දාගෙන යන්න...ඉස්සරහට ඔයාලගෙ අදහසුත් එක්ක කතාව ලියන්න පුලුවන්නේ😉❤️\n\n\n\nසෙව්😊❤️\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉 \n✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ ", rowId:" rowid2"},
        {title: '.𝙉𝙊𝙑𝙀𝙇3', description: "\n\n\n```*මීන නුවන් 03*\n        🧎🏻‍♀️❤️🧎\n( අසීමාන්තික ආදරයේ උත්තරීතර ආමන්ත්‍රණය....)\n\n★✼☆｡☆✼⁀➷★✼☆｡\n\n\nඅම්මෝ කොහෙන්දෝ ආපු වස ලැජ්ජාවකින් මාව කේෂාන්තයේ සිට පාදාන්තය දක්වාම දියවිලා යනව වගේ හැගීමක් එද්දි දිනිතියවත් ඇදගෙන ලයිබ්‍රි එකෙන් එළියට ආවා නෙවෙයි දිව්වා....\n\n හම්මෝහ් 😢\n\n මොකක් වෙලාද බං උබට මාවත් ඇදගෙන දිව්වේ.පිස්සු කෙලින්නැතුව යමං  ....\n\nඒකි එහෙම කියද්දි මට ආයෙත් මැවි මැවි පෙවුනා එදා ක්ලාස් එකේ කැන්‍ටින් එකේදි වෙච්ච දේ😟😟\n\n\nක්ලාස් ඉන්ටවල් දුන්නා විතරයි සෙට් එකත් එක්කම කැන්ටින් එකට ගියේ අපේ සයිබීරියානු හිගන්නන්ගේ බන්ඩිය පුරව ගන්න ඉතිම්🤭🤭🤭\nකොච්චර අම්මිගෙ කෑම කෑවත් යාලුවො එක්ක සෙට් වෙලා කන කෑම එක තරම් සෙට් නෑනෙ .....🙊(හෙට ඉදම් ගෙදරින් කෑමත් නැතිවෙයිද දන්නෑ😟)\nකන්න කන්න කියල ගියාට මොකද හිටගෙන තමා කන්න වෙන්නෙ😕ශිට්\nදන්නවනෙ ඉතිම් ක්ලාස් එකක දෙන ඉන්ටවල් එකකදි කැන්ටින් එක නිකම් පොල් පටවපු CTB බස් එක වගේ කියල🙁\n\nඔන්න ඉතිම් යන්තම් ටේබල් එකක් හිස් වෙද්දිම ඒකට සෙට් වෙලා කස්ටියම තෝසෙ කන්න තමා ලෑස්තිය😌😌😌\n\n අඩෝ....යකෝ  ඕක මගෙ.....දියම්.....අනේහ්.....නේහා මේ ..... කෝ බන් මට ඔය සොදි එක දියම්කො....අඩෝ එපා බන්.....ඒ කෑල්ලක් දියම්කො....අනේ මෙන්න මේකී ......\n\nදන්නවනෙ ඉතිම් යාලුවො සෙට් එකත් එක්ක කෑමක් කද්දි ඇහෙන ඒවා😜\n\nමෙතන ඉදම් මේකුන් එක්ක මගෙ කෑම එක කන්න වෙන්නෑ වගේ නිසා සින් ගාලා නැගිටල වෙන ටේබල් එකකට මාරු වෙන්න හැදුවා විතරයි........\n\n\nචාස්........😰😰😰😰😰\n\n අයියෝ ....මොකක්ද ඕයි මේ කළේ....පිස්සුද තමුසෙට ආ....සිහියෙන් යනව ඕයි යන මගුලක...ඕහ්...ශිට්..මගෙ ඇදුම.... 🤬🤬🤬😡\n\nඔය වගේ ටකරමට ගල් ගැහුවා වගේ ළග හිටපු මෑන්ස් මට බැනගෙන බැනගෙන ගියා..\n😣😣😣😣මෑන්ස්ගෙ ඇදුම පුරාම ඇන්ටියගෙ සොදි එක😟(😂😂😂😂)\n\nඅපෝ වස ලැජ්ජාවයි..\nඔක්කොම නිකම් බලන් හිටියෙ අගහරු වලින් කුරුමිට්ටෙක් පාත් වෙලා වගේනෙ යකෝ😒😒😤\n\n\nඅර මෑන්ස් තව මොනවාද මොනවාද ටිකක් කිය කිය බැනලා රැව්වා රැවිල්ලක් ආයෙ මගෙ සර්වාංගෙම දැවිලා අලු වෙලා යන්නම😟😟....\n\nනේහා....මොනාද තවත් බලන් ඉන්නෙ...ඉක්මනට මාරු වෙයම්....කියල මගේ හිත මටම කියද්දි ලැජ්ජාවට ඇස් දෙකේ කදුලුත් පුරවගෙන ආයෙ ක්ලාස් එකට දිව්වෙ ආයෙනම් හැරිලවත් බලන්නෑ කියල හිතාගෙන😰😰\n\nහම්මෝ....එදා ඔය මගෙන් සොදි පාරක් නාපු මෑන්ස් තමා අද සමීර අයියත් එක්ක හිටියේ😤😢😢\n\n\n නේහා...යකෝ මොනාද බං කල්පනා කරන්නෙ?? \n\nඔන්න ඉතිම් දිනිතිගෙ ඝාන්ඨාර පූජාව පටන් ගන්න හදනකොට තමයි පියවි සිහියට ආවෙ😶😩\n\n මොකුත් නැහැ බන්...අද...ම්ම්ම්...අද ලයිබ්‍රි ඕනි නැහැ..වෙන දවසක එමු බං...දැන් යමන්. 😟\n\n\n යකෝ තොට පිස්සුද බං....\n\n\nඅනේහ් බං...දැන් යමන්...ප්ලීස්...\n\n\nඔහොම කියල දිනිතියවත් ඇදගෙන ගෙදර ආවෙ අද දවසනම් එපාම කරපු දවසක් කියල හිතාගෙන...ශිට්😕\n\n\nකස්ටිය ගොඩක් ආසාවෙන් කියවන නිසා ඔන්න ඉතිම් 3rd ✨ Episode  එකත් දුන්නා...☺️\n\n\nකතාව ඉවර වෙනකන්ම මාත් එක්ක ඉන්න...\n\nකියවන කමෙන්ට් කරන හැමෝටම ආදරෙයි...😘 ❤️\n\nහෙට ඉදම් නම් ඉතිම් දවසට එක ගානෙ තමා හරිද❤️ තරහ වෙන්නෙපෝ...කවුරුත් 😊🙈\n\n\n\nසෙව්😊❤️️\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉\n\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ ", rowId:" rowid3"},
        {title: '.𝙉𝙊𝙑𝙀𝙇4', description: "\n\n\n*මීන නුවන් 04*\n     🧎‍♀❤️🧎\n\nඅසීමාන්තික ආදරයේ උත්තරීතර ආමන්ත්‍රණය....\n\n☆✼⋆⁀➷★✼☆｡★✼☆\n\n\nමේ දවස් වල නම් ඉතිම් මං සෑහෙන්න බිසී..මොකද මගෙ A/L එක්සෑම් එකට හරියටම තව සති දෙකක් වගේ පොඩි කාලයක් තිබ්බේ...📚 \n\nගෙදර අයත් ගොඩාක් උදව් කළා...මොකද එයාලගෙත් එකම හීනෙ උනේ මාව කොහොමහරි ජ පුර කැම්පස් එකේ management student  කෙනෙක් කරන එක😊😊😊\n\n\nඅයියත් මගෙ ළගින්ම ඉදගෙන පාඩම් වැඩ වලට උදව් කලා..සමහර විට රෑ දෙක තුන වෙනකම් මාත් එක්ක ඇහැරගෙන හිටියා....❤️\n\n..............................................\n\nඔය විදියට හැමෝගෙම උදව්වත් එක්ක මගෙ එක්සෑම් එකත් ඉවර උණා...පාඩම් වැඩ හොදට කරපු නිසා එක්සෑම් එකත් ලොකු අව්ලක් නැතුව ගොඩ දා ගත්තා ඉතිම්🙈❤️\n\n ඒයි බතලී ....දැන් ඉතිම් රිසාල්ට් එනකන්ම කකා බිබී සැතපිලා ඉන්නද කල්පනාව ....😒\n\n\nඔන්න ඉතිම් අයියා පටන් ගන්නයි හදන්නෙ😕පුදුම වෙන්න දෙයක් නෑ..අයියත් අම්මි වගේම තමා ඉතිම්....🙈\n\n අනේහ් යනවා මෝඩස්...😫හැමතිස්සෙම බතලි බතලි කියන්නෙ 😡සෙද්ද.... \n\n\n ඉතිම් ඇත්තනෙ දෝණි...🤭බලනවා තමුසෙ බටු ඇට දෙකක් තරම්වත් උස නෑ...බතල අලයක් වගේ ...\n\n ඔව් ඉතිම් අනූ අක්කි තරම්නම් උස නෑනෙ අයියෙ මං 😮😮\n\nඅම්මටත් ඇහෙන්න හයියෙන්ම ඒක කියලා අයියගෙ කොන්ඩෙනුත් ඇදගෙන උඩට ආවෙ එක්සෑම් එකත් ඉවර නිසා මගෙ අතිජාත පාප මිත්‍රයොත් එක්ක පොඩ්ඩක් සෙට් වෙමුද අහන්න🤓.....\n\n\n📲 yko exam walim passe ublt apiva amtk welama gihinda\n\nගෲප් එකට මැසේජ් එකක් දැම්මා....හම්මෝ මේන් ඒ පාර එක එකා මැසේජ් එවනෝ😒මුන්ට දැන් තමා මාව මතක් වෙලා තියෙන්නෙ😒😡\n\n📲ado neha mk?\n📲e oii heta kohe hri ymuda\n📲neha ayyawa mtk kla kiym😉\n\nඒ අස්සෙ තව එකෙක්,\n📲 meka 10 denekta ywnna.suba deyk ahnna labei.....\n\nබ්ලා බ්ලා බ්ලා..😒\n\nහෙට උදේ 10ට කස්ටියම සෙට් වෙමු කියාගෙන ඇදට පැන්නෙ සැප නින්දක් දාන්න ....😴😴?😴\n\n\n\nඔන්න ඉතිම් හෙට ඉදන් තමා හරියටම කතාව පටන් ගන්නෙ😊❤️\n\nටිකක් ඉන්ටකෝ.....😉\n\nකියවන අයටයි කමෙන්ට් කරන අයටයි තෑන්ක්ස් හරිද❤️\n\nසෙව්😊❤️\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉 \n\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣  ", rowId:" rowid4"},
        {title: '.𝙉𝙊𝙑𝙀𝙇5', description: "\n\n*මීන නුවන්...05*\n       🧎🏻‍♀️❤️🧎\n\nඅසීමාන්තික ආදරයේ උත්තරීතර ආමන්ත්‍රණය......\n\n★✼☆｡☆✼⁀➷★✼☆｡\n\n\nඅප්පට තිලි සදේ මල් කාන්ති ළිදේ කිව්වලු...😯\nකිව්ව විදියටම සෙට් එකම දහය වෙද්දි ඇවිත් හිටියා🤓....\n\nනිමා,අකියා,දිනිතියා,තරූ කෙල්ලහ්,රවියා,භාශි,සරා,එතකොට අපේ සෙහාන් කොල්ලා....\n\nසෙහාන් කිව්වට මේකගෙ නම ෂෙහාන්😌මෑන්ස්ට තියන ආදරේට තමා සෙහාන් කියන්නෙ🙈\n\nඑක්සෑම් ඉවර උනාට මොකෝ සෝමාලියානු බන්ඩියට සෙට් වෙලා කෑමක් දාගන්නම බැරි උනානෙ ...😂\n\n\nඅඩො බන්...උබලට කියන්න සාංකාවෙන් හිටියෙ බං මේ දවස්වල ......🥺\n\nඔන්න ඉතිම් අකියා පටන් ගත්තා පුරුදු පාට් එක...(ඕකා කොහෙන් ගියත් කතාව ඉවර කරන්නෙ කෑමකින්ම තමා😁)\n\n\n අඩෝ වයි බං...සෙට් උනේ දවසටවත් පොඩ්ඩක් ගැම්මෙන් හිටහම්කො..අනේ පනේ ගාන්නැතුව ....😒\n\n\n අනේ දිනිති තොට වැඩක් නෑනේහ්...හිටු පැත්තකින්😒😒😒 ...\n\nඒ පාර රවී පටන් ගත්තා😟....\n\n\nකොහොමින් කොහොමහරි කස්ටියත් එක්කම ටවුන් එකේ ශෂීන් අයියගෙ  සප්පායම ට සෙට් උනේ දවස් ගානකටම හරියන්න කෑමවලට දෙන්න සොට් එක😌😌😌😌(සප්පායම කිව්වෙ ඒකාගෙ හොටෙල් එකේ නම 😕මූට දාන්න වෙන නමක් තිබ්බෙම නැද්ද මන්දා😒)\n\n\nනේහා ......නේහා....\n\nකස්ටියත් එක්ක දැහැමින් සෙමින් වළදනකොට (බොරුවට කිව්වේ 😬අපේ එවුන් කන්න ගත්තම දැහැමින් කෙසේ වෙතත් හෙමින් නම් නෑනෙ😂)\nනිමා මට කතා කරා ලාවට වගෙ ඇහුනා...\n\n ඇයි බං මොකෝ... \n\n\nකොල්ලා සෑහෙන්න අපහසුතාවයකින් ඉන්නව වගේ පෙවුන නිසා මමත් ගත් කටටම ඇහුවා😒\n\n අනේහ්....නෑ ....බන් අනේ....මේහ් ...\n\n මොකද යකෝ සමනලයෙක්🦋🙊 වගෙ ඇඹරෙන්නෙ ....කියහම්කො මොකෝ සීන් එක🤔🤔\n\n\nඅනේ...බං උබට පේනවද අර .....👉👉👉කැබින් එක උඩ ඉන්න එකා....😢මට ඕනා බං ඒකගෙ සර්වාංගයම අනුභව කරන්න....කටු ටිකත් ඕනා බං ගෙදර යන ගමන් සූප්පු කරන්න 🥺🥺🥺\n\n\nහප්පට යකෝ....පෙන්නුවා නේද කැබින් එකේ තිබ්බ රෝස් කරපු චිකනෙක්ව🐔🍗🍗🍗....\n\nනිමා ව අලු වෙලා පිච්චිලා උගෙ සර්වාංගයේ සුලු දිය පහවෙලා යන්නම රැව්වා රැවිල්ලක්....🧐😒😒😒\n\nකස්ටියම සැපට කාල එහෙම බීච් එක පැත්තටත් සෙට් උනා ඉතිම් රවුමක් ගහල එන්න හිතාගෙන....\n\n🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊\n\nඔව්.....එදා තමයි ඉස්සෙල්ලාම ඒ ඇස්  දැක්කෙ....හරියට මාලුවෙක්ගෙ වගේ චූටි විසේකාර ඇස් දෙකක්.........එක පාරයි මූණ දිහා බලන්න පුලුවන් උනේ...එක පාරටම පපුව ඇතුළෙන් අකුණක් වැදුනා වගේ පිච්චිලා යන මොකක්දෝ හැගීමක් දැනුනා....\n\n\nඉතුරු ටික හෙට දෙන්නාම්ම්ම්.....😜\n\nකොහොමද කතාව ...\nකමෙන්ට් එකක් දාන්න ඉතිම්🙈❤️ \n\nකියවන අයටයි කමෙන්ට් කරන අයටයි තෑන්ක්ස් හරිද❤️ \n\n\nසෙව්😊❤️\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉\n ✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣ 𝐊𝐈𝐍𝐆 𝐁𝐎𝐓 𝐈𝐒𝐔𝐖𝐀✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣", rowId:" rowid5"},
        {title: '.𝙉𝙊𝙑𝙀𝙇6', description: "\n\n\n\n  *මීන නුවන් 06*\n       🧎🏻‍♀️❤️🧎\n\nඅසීමාන්තික ආදරයේ උත්තරීතර ආමන්ත්‍රණය....\n\n★✼☆｡☆✼⁀➷★✼☆\n\nබීච් එකට ආවට පස්සෙ අපේ උන්ට යක්සාවේශ වෙලා වගේ නටන්න ගත්තනෙ😢හපෝයි දෙයියනේ....මුන් හරියට නටන්න ගත්තෙ සහරා කාන්තාරෙන් බැහැපු එළුවො වගේනෙ🤓(oops හපෝයි සොරි ඈ....එළුවො නෙවෙයි ඔටුවො😌)......\n\nනිමාගෙ මූණ විතරයි පේන්නෙ.අරුන් ටික ඌව වැලි වලින් වහලම දාලා😂😂 ..යසා.......යි ඕකට....\n\n අනේ දැන් ඇති බං....අයියෝ බන්...ගෙදර යන්නෙ කොහොමද ....🥺\n\n හුස්ම ගන්න බෑ යකෝ මාව ගනිම්ම්ම්😭😭 \n\nහිටපු ගමන් එහෙමත් කෑගහනවා ඇහෙනව.පව් අපේ නිමා😂මට ඉතිම් චුටි අනුකම්පාවක් ඇති වෙලත් ආයෙ ඒක නැති වෙලා ගියේ මූ මට රෙස්ටුරන්ට් එකේදි කරපු වැඩේ මතක් වෙලා😒😒\n\n\nකොල්ලො ටික වැලි වලින් ආතල් ගද්දි අපි සෙට් එක ගියා ඉතිම් pre shout පාරක් දාන්න🙈දන්නැද්ද ඉතිම් කෙල්ලොනේ😉❤️\n\n  ඒ...නේහා..ඔහොම හරි නෑ බං...ඔය ඉන්න විදියටම සූට්ටක් හැරියන් සයිඩ් එකට .....\n\n අයියෝ දැන් ඇති බන්න්..යමංකෝ...බලහම් වෙලාව කීයද කියලා ....😒\n\n\nදිනිතියටත් රවාගෙන කොල්ලො ටික ඉන්න තැනට ගියෙ දැන් ගෙදර යමු කියන්න හිතාගෙන....\n\nහපෝ...මුන්ට ගෙදර යන්න ගානක්වත් නෑ තාමත් අරූව වැලි වලක් බස්සවගෙන දස වද දෙනවා....😂😂😂\n\n\nආතල් එකේ උච්චතම අවස්ථාවට ආවට පස්සෙ කස්ටියටම වැලි නාන්නත් සිද්ද උනා ඉතිම්😫😫\n\nමමත් ඉතිම් අතෑරියෙ නෑ...දුන්නා වැලි බාල්දියකින් විතර සෙහානයට....😂😂\n\n\n අඩෝ මොකක්ද $&%$%%$%&  කළේ😢හිටපං තොට දෙන්නම් .... \nකියාගෙනම අරූ එනෝ කැප් එකෙන්  එකක් වැලි අරගෙන....\n\nකරගන්න දෙයක් නෑ...අදනම් කරපු පව් වලට රිටන් හම්බෙනව කියල දැනගෙනම දිව්වා දිව්ල්ලක්.....😱\n\n\nදුවමු මිතුර දුවමු....\nදුවමු මිතුර දුවමු....🏃 🏃 (😂)\n\nචටාස්.....😨😨😨\nවැඩි වෙලා දුවන්න උනේ නෑ  එකපාරටම සිමෙන්ති කණුවක් වගේ එකක හැප්පිලා  බිමට වැටුනා ගෙම්බා පොලවෙ ගහලා සපත්තුවෙන් චොප්ප කළා වගේ😥(😂).....\n\n\nකවුද  මේ වේලුසුමනයා කියල බලන්න ඉස්සුනා විතරයි යකෝ නීල මහා යෝධයා වගේ එකෙක් ඉන්නවනෙ ඇස් දෙක ඉස්සරහ මරු මූස් වගේ මාව කන්න බලාගෙන😱😢....\n\nහැබැයි මෑන්ස් හෙන හැන්ඩියා😎😎😌\n\n..I m very sorry mr....හිතලා වැදුනෙ නැහැ....😟\n\nඑහෙම කියද්දිම මූ මගෙ දිහා බලන්නෙවත් නැතුව ,\n\n It s okay ...\n\nකියාගෙන යන්න ගියානෙ😒\nයකෝ මුගෙ අලි ඔලුව  බලාම්කො...ජිම් ගිහිම් සික්ස් පැක් හදාගෙන එනව මෙතන අපිට ලොකු සීන් දාන්න😒😒පුහ්....\n\nමොනා උනත්  දෙපාරක් හැරිල බැලෙන තරම් ලස්සනක් තිබ්බෙ නෑ කියන්නෑ ඉතිම්😁😁(මේ සූටි කටින් බොරු කියන්න හොද නෑනෙ😂)....\n\n\nවැඩි වෙලා සිහින ලෝකෙ ඉන්න හම්බ උනේ නෑ.....\n\n චටාස් 😫😫😫....\n\nසෙහානය ගහපු වැලි පාරනම් වැදුනා ආයෙ දෙකක් නෑ මූණ දෙල් වෙලා යන්නම...🍈🍈🍈🥺🥺😩\n\n ආ....ඇද්ද උඹට...ආව මෙතන අපිට පූස් පාට දාන්න ....😹😹😹👌\n\n හිටහම්කො.ඕවට රිටන් දෙන්නම් උබට ....😒\n\n..............................................\n\n\nඔය විදියට ඉතිම් රෑ වෙනකන්ම සෙට් එකත් එක්ක නට නටා ඉදලා රෑටත් වළදලාම තමා ගෙදර ආවෙ😁😂...\n\nඅම්මටනම් යකා නැගලා...කතා කළේවත් නෑ ගිය වෙලේ ඉදම්😂\n\nකමක් නෑ ශුදු නෝනේ ඔයාව උදේට මං යාලු කරගන්නම්කෝ කියල හිතාගෙන ඇදට පැන්නෙ අර නීල මහා යෝධයවත් මගෙ සූටි හාර්ට් එකේ කොනකින් තියාගෙන ඉතිම්🙈❤️ .....\n\n\n\nකස්ටිය ගොඩක් ආසාවෙන් කතාව කියවන නිසා ඔන්න දිග.......කොටසක් දුන්නා😊😊❤️\n\nමරණ තර්ජනත් එල්ල උනා කතාව දාන්නෑ කිව්වම😂\n\nම්ම්ම්...කතාව ලස්සනයිනම් කමෙන්ට් එකක් දාන්න....එතකොට ඉතිම් මටත් පුලුවන් ගැම්මෙන් කතාව ලියන්න🙈❤️\n\n\n\nකියවන අයටයි කමෙන්ට් කරන අයටයි තෑන්ක්ස් හරිද❤️ \n\n\nසෙව්😊❤️\n\nWrote By 𝙄𝙎𝙐𝙍𝙐 𝘿𝘼𝙔𝘼𝙉   \n   🌹⃝❤️࿔⃟࿔    \n\n      \n      ╔══╗ ♪      \n      ║██║ ♫      \n      ║ ( ● ) ♫      \n      ╚══╝♪ ♪", rowId:" rowid6"}
       ]

       const sections = [{title: "ωнαтsαρρ вσт™", rows: rows}]

       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 🇱🇰❃ 𝗛𝗘𝗥𝗘',
        description: "*~________~ ✴𝙆𝙄𝙉𝙂 ❤ 𝙄𝙎𝙐𝙒𝘼✴࿐ ~______~*\n\n\nසියලුම කමාන්ඩ් මෙහි ඇත\n\n.    ▼￣＞-―-＜￣▼\n 　　Ｙ　            Ｙ\n    /\   / 　 ●    o  ●）\n  ＼  ｜　 つ　    ヽ\n",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));