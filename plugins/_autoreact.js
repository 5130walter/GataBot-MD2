let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(res|ya|auto|dis|ito|ita|sin|azo|enta|ante|endo|nar|ando||ido|ado|ismo)/i
handler.command = new RegExp
 
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 

