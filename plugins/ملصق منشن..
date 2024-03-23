import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
    // if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0 (معطل حاليا لغرض التجريب)

    const s = [
"https://telegra.ph/file/7f09592b9ab254da2fdf3.png",
"https://telegra.ph/file/9739be6daf831faec3e04.mp4",
"https://telegra.ph/file/2cd125cc4cbc7fa076630.png",
"https://telegra.ph/file/d55556d01d452e496567c.png",
"https://telegra.ph/file/a6ad1375db435ae0a6a85.mp4",
 "https://telegra.ph/file/a0e5d875e7cb5bdd58180.png"  ];  

    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}

handler.customPrefix = /@201271303736|@201289863299/i 
handler.command = new RegExp
handler.exp = 50
export default handler