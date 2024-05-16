let handler = async (m, { command, text }) => m.reply(`*╔═╼─╾─╾═【🕸️】═╼─╾╾─╾═╗*

  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره\استمارة)$/i

export default handler
