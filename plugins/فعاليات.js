import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
〄━━━━━⌬〔KAKASHI〕⌬━━━━━〄

*⌬🕹️┋السوأل » احزر الشخصية*

*⌬⏳┋الواقت » 60 ث*

*⌬🏆┋الجائزه » 20k*

*⌬━━──⧉⊰🎴⊱⧉──━━⌬*
~⌬ تـوقيع المطور
🤖┋«kakashi»┋🤖
*╰━━━━━━━━━━━━⬣*`, m)
}
handler.comm = handler.help = ['فعالة','فعا']
handler.tags = ['game']
handler.command = /^(فعاليات)$/i
handler.admin = true
export default handler
