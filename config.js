
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285716683182','6285716683182','6285716683182']
global.packname = 'RYAN πΌπΎπΎπ³ π1'
global.author = 'RYAN πΌπΎπΎπ³ π1'
global.sessionName = 'ryan'
global.prefa = ['','!','.','#']
global.ownername = 'ryan'
global.sp = '>'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'π΅πΈπππ πΊπ·ππππ πΎππ½π΄π π±πΎπ :π ππ΄π»π°πΈπ½ πΎππ½π΄π ? ππΊπΈπΏ',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Data In Process, Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
