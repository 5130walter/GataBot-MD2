async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, `${fg}𝙉𝙊 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙐𝙉 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#start* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉\n\n𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝙄𝙉 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏\n𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙎𝙏𝘼𝙍𝙏 𝘼𝙉 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *#start* 𝙊𝙍 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙐𝙎𝙀 𝙏𝙃𝙀 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂 𝘽𝙐𝙏𝙏𝙊𝙉`, wm, null, [['𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 | 𝙎𝙏𝘼𝙍𝙏', `.start`]], m)
m.reply(`${rg}❇️ 𝙐𝙎𝙏𝙀𝘿 𝙎𝙀 𝙁𝙐𝙀 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊\n\n❇️ 𝙔𝙊𝙐 𝙇𝙀𝙁𝙏 𝙏𝙃𝙀 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏`)
let other = room.other(m.sender) 
if (other) await this.sendButton(other, `${ag}𝙀𝙇 𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝙊 𝙀𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙄𝙍 𝘼 𝙊𝙏𝙍𝙊 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 𝙐𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#start* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 𝙀𝙇 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝘽𝙊𝙏𝙊𝙉\n\n𝙏𝙃𝙀 𝙊𝙏𝙃𝙀𝙍 𝙐𝙎𝙀𝙍 𝙇𝙀𝙁𝙏 𝙏𝙃𝙀 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏\n𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙂𝙊 𝙏𝙊 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *#start* 𝙊𝙍 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙐𝙎𝙀 𝙏𝙃𝙀 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂 𝘽𝙐𝙏𝙏𝙊𝙉`, wm, null, [['𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 | 𝙎𝙏𝘼𝙍𝙏', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾 𝙾 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰 𝚀𝚄𝙴 𝙾𝚃𝚁𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚂𝙴 𝚄𝙽𝙰 𝙿𝙰𝚁𝙰 𝙸𝙽𝙸𝙲𝙸𝙰𝚁*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾?*\n_𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙴𝙻 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙱𝙾𝚃𝙾𝙽_', author, null, [['𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, `${eg}𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊!!\n𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿 𝙏𝙃𝙀 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏!!\n\n✅ 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝘾𝙃𝘼𝙏𝙀𝘼𝙍\n✅ 𝙔𝙊𝙐 𝘾𝘼𝙉 𝘾𝙃𝘼𝙏 𝙉𝙊𝙒`,wm, null, [['𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 | 𝙉𝙀𝙓𝙏', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, `${eg}𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊!!\n𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿 𝙏𝙃𝙀 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏!!\n\n✅ 𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝘾𝙃𝘼𝙏𝙀𝘼𝙍\n✅ 𝙔𝙊𝙐 𝘾𝘼𝙉 𝘾𝙃𝘼𝙏 𝙉𝙊𝙒`, wm, null, [['𝙊𝙏𝙍𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 | 𝙉𝙀𝙓𝙏', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰 𝙾𝚃𝚁𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝙰𝚁𝙰 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*\n\n*¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾?*\n_𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙴𝙻 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙱𝙾𝚃𝙾𝙽_', author, null, [['𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
