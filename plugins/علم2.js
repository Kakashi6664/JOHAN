let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = *${command.toUpperCase()}*
  ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
  *استخدم .انسحب للأنسحاب*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
*❰BY : 𝑇𝑅𝐴𝐹𝐴𝐿𝐺𝐴𝑅 𝐿𝐴𝛩🧧❱*
     .trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.question, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, ❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.response}*┇, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^علم/i

export default handler
