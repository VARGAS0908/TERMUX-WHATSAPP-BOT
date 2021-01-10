let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via NodeJs

➥ Instagram: instagram.com/VARGAS_250/
➥ YouTube: VARGAS OFFICIAL

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ *PULSA* : 0812-2756-0249
➥ *DANA* : 0812-2756-0249
➥ *OVO* : 0812-2756-0249


〘 VARGAS_250 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

