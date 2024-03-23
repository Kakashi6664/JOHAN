let handler = async (m, { conn, command, text }) => {let intelligence = `*💡 نسبة الذكاء 💡*
*نسبة ذكاء ${text} 💡هي* *${Math.floor(Math.random() * 100)}%* *من 100%**ما شاءالله دماغ 🐦🧠*
`.trim()m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']handler.tags = ['fun']
handler.command = /^(ذكاء)$/iexport default handler