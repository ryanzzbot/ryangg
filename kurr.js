// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮YOSOKA BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮yosokahost@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/yosokaNesia
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃HARGAI PEMBUAT BOT
//┃THANKS FOR CHOOSING KURR
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const xfarr = require('xfarr-api')
const maker = require('mumaker')
const FormData = require('form-data')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ttdown = require('./lib/tt')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash } = require('./lib/myfunc')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')

const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')

const { TelegraPh } = require ('./lib/uploader')
const hit = JSON.parse(fs.readFileSync('./lib/db/dash.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
//time
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//anu
const { color } = require("./lib/color")

//db json
const ban = JSON.parse(fs.readFileSync('./lib/db/ban.json'))
const afk = JSON.parse(fs.readFileSync('./lib/db/afk.json'))
const game = JSON.parse(fs.readFileSync('./lib/db/game.json'))
const cmdmedia = JSON.parse(fs.readFileSync('./lib/db/cmd.json'))
const users = JSON.parse(fs.readFileSync('./lib/db/user.json'))
const email = JSON.parse(fs.readFileSync('./lib/db/email.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/db/respon.json'))//
fatihgan = fs.readFileSync('./lib/assets/logo.jpg')
//bgst
butong1 = [{   
    quickReplyButton: {
        displayText: 'BACK TO MENU',
        id: 'menu'
    }  
 }, {
    quickReplyButton: {
        displayText: 'SUPORT BOT',
        id: 'donasi'
 }
                                
 }]
//random
serial = generateHash(20)

// Database Game
const kuismath = game.math = []
const _family100 = game.family100 = []
const tebakkata = game.tebakkata = []
const tebakbendera = game.tebakbendera = []
const siapaaku = game.siapaaku = []
const tebakkalimat = game.tebakkalimat = []
const caklontong = game.caklontong = []
const susunkata = game.susunkata = []
const tekateki = game.tekateki = []
const tebakkabupaten = game.tebakkabupaten = []
const tebakkimia = game.tebakkimia = []
const tebaklirik = game.tebaklirik = []
const tebaktebakan = game.tebaktebakan = []


// Start
module.exports = kurr = async (kurr, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = kurr.user.id ? kurr.user.id.split(":")[0]+"@s.whatsapp.net" : kurr.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const arg = budy.slice(command.length + 2, budy.length)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    const isNumber = x => typeof x === 'number' && !isNaN(x)
	    
        // Group
        const from = mek.key.remoteJid
        const isGroup = m.chat.endsWith('@g.us')
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const groupMetadata = m.isGroup ? await kurr.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
        // Anti Link By: DanzzXCode's
        if (isAntiLink) {
        if (budy.includes(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin`)
        let gclink = ('https://chat.whatsapp.com/')
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ngapain Lu Ngirim Link Group Ini?`)
        if (isAdmins) return m.reply(`Admin Mah Bebas Yakan?`)
        if (isCreator) return m.reply(`Owner Bot Mah Bebas Yakan?`)
        m.reply(`[ *ANTI LINK* ]\n\nKamu Terdeteksi Mengirim Link Grup, Kamu Akan Di Kick!!!`)
        kurr.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        //TIME
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date
    let hari = o.toLocaleDateString(locale, { weekday: 'long' })
    let yoi = o.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
        // Public & Self
        if (!kurr.public) {
            if (!m.key.fromMe) return
        }
        /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    kurr.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: kurr.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            kurr.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        // TextTeplate 
        const textTemplateButtons = (from, text, footer, buttons) => {
            return kurr.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await kurr.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }
        
        const adduser = (sender, pushname) => {
            const obj = { id: sender, name: pushname, }
            users.push(obj)
            fs.writeFileSync('./lib/db/user.json', JSON.stringify(users))
        }
        const cekuser = (sender) => {
            let status = false
            Object.keys(users).forEach((i) => {
                if (users[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isUser = cekuser(sender)
        
        const addmail = (text) => {
            const obj = { email: text, }
            email.push(obj)
            fs.writeFileSync('./lib/db/email.json', JSON.stringify(email))
        }
        const cekmail = (text) => {
            let status = false
            Object.keys(email).forEach((i) => {
                if (email[i].email === text) {
                    status = true
                }
            })
            return status
        }
        const checkEmail = cekmail(text)
        
        // Database
        try {
let users = afk[m.sender]
if (typeof users !== 'object') afk[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else afk[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
} catch (err) {
console.log(err)
}
//afk
	for (let jid of mentionUser) {
let user = afk[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
`.trim())
}

if (afk[m.sender].afkTime > -1) {
let user = afk[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
`.trim())
user.afkTime = -1
user.afkReason = ''

}

        // Push Message To Console
        kurr.sendReadReceipt(m.chat, m.sender, [m.key.id])
        kurr.sendPresenceUpdate('composing', m.chat)
        if (isCmd && !isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        // Func dashboard
        let words = ["menu","owner","ytmp3","ytmp4","tiktok","s","sticker","dash","help","toimg","anonymous","dashboard","anonymous","start","leave","tiktok","yt","ttaud","ttvid","tahta","nulis","pinterest"]

if (isCmd && !m.isBaileys) {
try {
hitp = words.filter(suu => suu === command)
if (hitp[0] === command) {
hit.push({ sender: m.sender, cmd: command })
fs.writeFileSync('./lib/db/dash.json', JSON.stringify(hit))
}
} catch(err) {
console.log(err)
}

      }
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kurr.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kurr.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kurr.ev.emit('messages.upsert', msg)
        }
	    
	if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (('family100'+m.chat in _family100) && isCmd) {
	    kuis = true
	    let room = _family100['family100'+m.chat]
	    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './lib/assets/logo.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
	    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
	    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
	    if (!isSurender) {
	        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
	        if (room.terjawab[index]) return !0
		room.terjawab[index] = m.sender
	    }
	    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
	return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}

${isSurender ? '' : ``}`.trim()
	    kurr.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
	    if (isWin || isSurender) delete _family100['family100'+m.chat]
	}
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`)
                delete siapaaku[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        switch(command) {
case 'menu':
                    Anu = ` 🗣️ : *Hay Kak ${pushname} 👋 Janggan toxic yo*
╭──(        ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ        )
║- Sc Private 友
│🎭 Name : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🎭 Creator : ${packname}
║🎭 Owner :  ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ
│🎭 Owner Number : 085891634201
║🎭 Prefix :MULTI
│▬▭「 ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ️ 」▭▬
║
│ Chenel : https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg
║
┗━━━━━━━━━━━━━━━━━━⬣

╭─❏ *『 INFO SERVER 』*
║ ➪ Waktu : ${time}
║ ➪ WIB : ${moment().utcOffset('+0700').format('HH:mm')}
║ ➪ WIB : ${moment().utcOffset('+0900').format('HH:mm')}
║ ➪ WITA : ${moment().utcOffset('+0800').format('HH:mm')}
┗━━━━━━━━━━━━━━━━━━⬣

╭───[ *MENU BOT SERVER*  ]───
│⿻ ${prefix}domain hostname|ip
│⿻ ${prefix}linkgc
│⿻ ${prefix}sc
│⿻ ${prefix}scphising
│⿻ ${prefix}toimage
│⿻ ${prefix}testi
│⿻ ${prefix}shorlink
│⿻ ${prefix}loginwhm
│⿻ ${prefix}logincpanel
│⿻ ${prefix}linkadd
│⿻ ${prefix}linksubdo
│⿻ ${prefix}webp
│⿻ ${prefix}listdomain1
│⿻ ${prefix}listdomain2
│⿻ ${prefix}listdomain3
┗━━[ *MENU BOT SERVER* ]━━━━⬣

╭───[ *MENU OWNER BOT*  ]───
│⿻ ${prefix}addpack user|pack
│⿻ ${prefix}termint  (owner only)   
│⿻ ${prefix}bcgroup
│⿻ ${prefix}group
│⿻ ${prefix}delete / del ( khusus bot )
│⿻ ${prefix}add
│⿻ ${prefix}kick
│⿻ ${prefix}hidetag ( ADMIN )
│⿻ ${prefix}sticker
│⿻ ${prefix}setppbot ( owner )
│⿻ ${prefix}resetlink
┗━━[ *MENU OWNER BOT* ]━━━━⬣

╭───[ *MENU* ]───
│⿻ ${prefix}linkgc
│⿻ ${prefix}listgc (untuk liat id gc)
│⿻ ${prefix}antilink [enable/disable]
│⿻ ${prefix}ephemeral [option]
│⿻ ${prefix}setppgc [image]
│⿻ ${prefix}setname [text]
│⿻ ${prefix}setdesc [text]
│⿻ ${prefix}group [option]
│⿻ ${prefix}editinfo [option]
│⿻ ${prefix}tagall [text]
│⿻ ${prefix}promote @user
│⿻ ${prefix}demote @user
│⿻ ${prefix}vote [text]
│⿻ ${prefix}devote
│⿻ ${prefix}upvote
│⿻ ${prefix}cekvote
│⿻ ${prefix}hapusvote
┗━━[ *MENU OWNER BOT* ]━━━━⬣     
`
let btn = [{
urlButton: {
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'Owner'
}
}, {
quickReplyButton: {
displayText: 'Status',
id: 'ping'
}  
}, {
quickReplyButton: {
displayText: 'ꪶ𝒀𝑶𝑺𝑶𝑲𝑨 ✇ 𝑴𝑶𝑫𝑺🜏ꫂ',
id: 'pemcet'
}
}]
fatihgans = fs.readFileSync('./lib/assets/logo.jpg'), 
kurr.send5ButImg(m.chat, Anu, ` 𝙱𝙾𝚃 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 𝙱𝚈 𝚈𝙾𝚂𝙽𝙴𝚂𝙸𝙰🤖 `, fatihgans, btn)
break
case 'listpc': {		
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
kurr.sendTextWithMentions(m.chat, teks, m)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kurr.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kurr.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': { 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
kurr.groupRevokeInvite(m.chat)
m.reply(`*Sukses Mereset Link🤖*`)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                await kurr.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                kurr.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                                           case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                let response = await kurr.groupInviteCode(m.chat)
                kurr.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            
                                          case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kurr.groupMetadata(i)
                     teks += `› *Nama :* ${metadata.subject}\n› *ID :* ${metadata.id}\n› *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n› *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kurr.sendTextWithMentions(m.chat, teks, m)
             }         
             break
             case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                if (isgclink.test(m.chat).antilink) return reply(`Sudah Aktif Sebelumnya`)
                isgclink.test(m.chat).antilink = true
                reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!isgclink.test(m.chat).antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
                isgclink.test(m.chat).antilink = false
                reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `Mode Antilink`, kurr.user.name, m)
                }
             }
             break
             case 'termint':
let uname = args[0]
if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
        if(!uname) m.reply("mana username nya")
        
        axios.get(`https://uk.inmotion.pw:2087/json-api/removeacct?api.version=1&username=${uname}`, { headers: { Authorization: "Basic " + Buffer.from("root:MMMMALLS119@#").toString("base64") } })
        .then(e=>{if([1, "1"].includes(e.data?.metadata?.result)) m.reply(`done user ${uname} Telah di Termint`); else {m.reply("error"); console.log(e.data)}})
        .catch(e=>{m.reply("error"); console.log(JSON.stringify(e, null, 2))})
      break
case 'webp': {
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `Selamat menikmati yang sudah di kasih\n\nName : ${pushname}\nGmail : Gmail lu\nOwner : ${packname}\nLimit : 0X\n\nNOTE : JANGGAN SPAM BOT DENGAN WEB P`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗬𝗢𝗦𝗡𝗘𝗦𝗜𝗔❞',
                                    url: 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/EOBISDYBxalCAhhhuV7oEH'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄❞',
                                    id: 'mediafire'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄❞',
                                    id: 'free fire'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐌𝐄𝐃𝐈𝐀 𝐒𝐄𝐓𝐈𝐍𝐆❞',
                                    id: 'mediaseting'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kurr.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kurr.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
                                          case 'pemcet':
                                          m.reply(`GG KAN BOT NYA SUBS YT GW DONG BIAR NAMBAH GG\nYT : https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg`)
                                          break
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                await kurr.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === 'close'){
                    await kurr.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group🤖`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kurr.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group🤖`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `Mode Group`, '© 𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓', m)

             }
            }
            break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `𝙱𝙰𝙻𝙴𝚂 𝚂𝚃𝙸𝙺𝙴𝚁 𝙳𝙴𝙽𝙶𝙰𝙽 𝙲𝙰𝙿𝚃𝙸𝙾𝙽 𝚃𝙾𝙸𝙼𝙰𝙶𝙴 || 𝚈𝙰𝙽𝙶 𝚂𝚃𝙸𝙺𝙴𝚁 𝙻𝚄 𝙺𝙸𝚁𝙸𝙼 𝙹𝙰𝙳𝙸𝙸 𝚃𝙾𝙸𝙼𝙰𝙶𝙴 *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kurr.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                m.reply("khusus bot sahaja")
                kurr.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'hidetag': {
            if (!isCreator) throw mess.owner
            if (!isBotAdmins) throw mess.botAdmin
            kurr.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
case 'kick': {
		if (!m.isGroup) throw mess.group
		if (!isCreator) throw mess.owner
        if (!isBotAdmins) throw mess.botAdmin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'sc':
                                          m.reply(`𝗦𝗖 𝗞𝗛𝗨𝗦𝗨𝗦 𝗣𝗛𝗜𝗦𝗜𝗡𝗚 !!\n𝗦𝗖 : https://lynk.id/allscriptbyyosnesia`)
                                          break
case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!text) throw 'Text ?'
                await kurr.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!text) throw 'Text ?'
                await kurr.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                await kurr.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix}+ command}`
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                await kurr.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'mediafire':
                                          m.reply(`Silahkan send mail anda\nName : ${pushname}\nTampilan : mediafire\nLimit : 0X\nNOTE : SABAR JANGGAN SPAM SESUAI LIMIT`)
                                          break
case 'freefire':
                                          m.reply(`Silahkan send mail anda\nName : ${pushname}\nTampilan : free fire\nLimit : 0X\nNOTE : SABAR JANGGAN SPAM SESUAI LIMIT`)
                                          break
case 'mediaseting':
                                          m.reply(`Silahkan send mail anda\nName : ${pushname}\nTampilan : mediafireseting\nLimit : 0X\nNOTE : SABAR JANGGAN SPAM SESUAI LIMIT`)
                                          break
case 'testi':
                                          m.reply(` 𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜 𝗕𝗬 𝗬𝗢𝗦¹⁹ !!\n𝗡𝗜 𝗧𝗘𝗦𝗧𝗢𝗗 : https://imageshack.com/user/yosoka-testimoni`)
                                          break
case 'shorlink':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(` 𝗦𝗛𝗢𝗥𝗟𝗜𝗡𝗞 𝗡𝗬𝗔 𝗠𝗔𝗦𝗭𝗘𝗛𝗛𝗛 !!\n𝗟𝗜𝗡𝗞 : http://sg-ap.tutorevent2022.cf\n\nKey : Y`)
                                          break
case 'loginwhm':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(` 𝗟𝗢𝗚 𝗪𝗛𝗠 𝗡𝗬𝗔 𝗠𝗔𝗦𝗭𝗘𝗛𝗛𝗛 !!\n𝗟𝗜𝗡𝗞 : EROR MASZEHHH\nKALO EROR JANGGAN MAKSA KONTOLL:V`)
                                          break
case 'logincpanel':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(` 𝗟𝗢𝗚 𝗪𝗛𝗠 𝗡𝗬𝗔 𝗠𝗔𝗦𝗭𝗘𝗛𝗛𝗛 !!\n𝗟𝗜𝗡𝗞 : EROR MASZEHHH\nKALO EROR JANGGAN MAKSA KONTOLL:V`)
                                          break
case 'listpc': {
if (!isCreator) throw mess.owner
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 kurr.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'scphising':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(` 𝙿𝙰𝙺𝙰𝙸 𝚂𝙲 𝙿𝙷𝙸𝚂𝙸𝙽𝙶 𝙳𝙸 𝙱𝚆𝙷 𝙸𝙽𝙸!!\n\n______________________________________________\n SC PHISING MEDIAFIRE DLL\n\nhttps://www.mediafire.com/file/iwehu7qy4wcrxwr/MediaFire-Yos.zip/file\n______________________________________________\n\nhttps://www.mediafire.com/file/bk7l0kh7jt50owc/GrubWaBiruByYosnesia.zip/file\n\n___________________________________________\n\nhttps://www.mediafire.com/file/tcdzdn6d1scszzz/GroupAraaNew_-_Full_InfoByYosNesia.zip/file\n\n______________________________________________\n\https://www.mediafire.com/file/t2tkcatbm5dsjuw/GroupSilaPinkkByYosNesia.zip/file\n\n______________________________________________\n\nhttps://www.mediafire.com/file/fygx12j43m0f3va/GRUP_MABAR_KOPRALJONO.zip/file\n\n______________________________________________\n\https://www.mediafire.com/file/8te7ih5x96srl99/GrubKenzyByYosnesia.zip/file\n\n______________________________________________\n\https://www.mediafire.com/file/b02st6c9af3c29f/Codashop%25282%2529.zip/file\n\nn______________________________________________\n\nhttps://www.mediafire.com/file/tcdzdn6d1scszzz/GroupAraaNew_-_Full_InfoByYosNesia.zip/file\n\n______________________________________________\n\nhttps://www.mediafire.com/file/t5c4o8xptd6sfpi/EG_SC_GRUB_RIFFA_ATTA_BY_YOSNESIA.zip/file\n\n______________________________________________\nMOGA BERMANFAAT YA KAWANN:V`)
                                          break
case 'sc':
                                          m.reply(`𝗚𝗜𝗧𝗛𝗨𝗕 𝗬𝗢𝗦𝗡𝗘𝗦𝗜𝗔 𝗢𝗢𝗠 !!\n𝗟𝗜𝗡𝗞 : https://github.com/YosokaHosting`)
                                          break
case 'linksubdo':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`𝗟𝗜𝗡𝗞 𝗦𝗨𝗕𝗗𝗢 𝗢𝗢𝗠 !!\n𝗟𝗜𝗡𝗞 : https://subdomain.rakapay.my.id/domain.php`)
                                          break
case 'linkadd':
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`𝗟𝗜𝗡𝗞 𝗔𝗗𝗗 𝗡𝗬𝗔 𝗢𝗢𝗠 !!\n𝗟𝗜𝗡𝗞 : https://paperpack.cloudnesia.tk`)
                                        break
case 'listdomain1': {
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `SELAMAT MENIKMATI

┏━┅┅►❝𝐃𝐎𝐌𝐀𝐈𝐍 𝐏𝐀𝐒𝐓𝐄❞◄━┅┅┓
┃ 
┃┊◎ ryan-terbrux.my.id
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┗━❁━┈━❁━┈━❁━┈━❁━┛

contoh : https://yosokaganteng.barux2022.tk

𝗬 𝗢 𝗦 𝗢 𝗞 𝗔 - 𝗕 𝗢 𝗧 𝗭 `
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗬𝗢𝗦𝗡𝗘𝗦𝗜𝗔❞',
                                    url: 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/EOBISDYBxalCAhhhuV7oEH'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐓𝐀𝐓𝐔𝐒❞',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐎𝐖𝐍𝐄𝐑❞',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐂𝐑𝐈𝐏𝐓❞',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'listdomain2': {
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `SELAMAT MENIKMATI DOMAIN YANG ADA 🤗

┏━┅┅►❝𝐃𝐀𝐅𝐓𝐀𝐑 𝐃𝐎𝐌𝐀𝐈𝐍❞◄━┅┅┓
┃ 
┃┊◎ .domain1 |  ryan-terbrux.my
id
┃ 
┃┊◎ .domain2 | 
┃ 
┃┊◎ .domain3 | 
┃ 
┃┊◎ .domain4 | 
┃ 
┃┊◎ .domain5 | 
┃ 
┃┊◎ .domain6 |  
┃
┃ MAO NAMBAHIN DOMAIN ? CHAT YOSOKA🤖
┃
┗━❁━┈━❁━┈━❁━┈━❁━┛

contoh : .domain2 namahost|ip server

 𝗕 𝗢 𝗧 𝗭 `
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗬𝗢𝗦𝗡𝗘𝗦𝗜𝗔❞',
                                    url: 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/EOBISDYBxalCAhhhuV7oEH'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐓𝐀𝐓𝐔𝐒❞',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐎𝐖𝐍𝐄𝐑❞',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐌𝐄𝐍𝐔❞',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'listdomain3': {
if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `SELAMAT MENIKMATI

┏━┅┅►❝𝐃𝐎𝐌𝐀𝐈𝐍 𝐏𝐀𝐒𝐓𝐄❞◄━┅┅┓
┃ 
┃┊◎ viral-2022.my.id
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┃┊◎ 
┃ 
┗━❁━┈━❁━┈━❁━┈━❁━┛

contoh : https://yosokaganteng.barux2022.tk

 𝗕 𝗢 𝗧 𝗭 `
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗬𝗢𝗦𝗡𝗘𝗦𝗜𝗔❞',
                                    url: 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/EOBISDYBxalCAhhhuV7oEH'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐓𝐀𝐓𝐔𝐒❞',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐎𝐖𝐍𝐄𝐑❞',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐂𝐑𝐈𝐏𝐓❞',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'listdomain4':
            case 'listdomain5':
            case 'listdomain6':
            case 'listdomain7':
            case 'listdomain8':
            case 'listdomain9':
            case 'listdomain10':
            m.reply(`*cuma ada listdomain1/2 doang kontol*`)
            break
case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'owner': case 'creator': {
                kurr.sendContact(m.chat, global.owner, m)
            }
            break
case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                if (isAntiLink[m.chat].antilink.includes) return m.reply(`Sudah Aktif Sebelumnya`)
                isAntiLink[m.chat].antilink.includes = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!isAntiLink[m.chat].antilink.includes) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                isAntiLink[m.chat].antilink.includes = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `Mode Antilink`, '© Danzz-MD', m)
                }
             }
             break
case 'listonline': case 'liston': {
if (!isCreator) throw mess.owner
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
kurr.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Yosoka-Botz`
                let getGroups = await kurr.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Youtube📽️',
                                    url: 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s🔗',
                                    url: 'https://api-Yosoka.herokuapp.com/'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot🤖',
                                    id: 'sewabot'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Tampilkan Menu📚',
                                    id: 'command'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kurr.send5ButImg(i, txt, '© YosokaBotz', global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
                                          case 'addpack':
         if(from != "ID GROUPNYA") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
        let sUser1 = "root";
        let sPass1 = "pw root";
        let serverName1 = "link server no https://";

        let uname1 = args?.join(" ")?.trim()?.split("|")?.[0]?.trim();
        let pack1 = args?.join(" ")?.trim()?.split("|")?.[1]?.trim();

        if (!uname1 || !pack1) return m.reply(`mana ${!uname1 && !pack1 ? "username & package" : !uname1 ? "username" : !pack1 ? "package" : ""} nya\n\nusage: .addpack username | package`);

        axios
          .get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
          .then((e) => {
            let pkgs = e.data?.data?.pkg
              ?.map((x) => {
                return x.name;
              })
              .filter((x) => {
                return !x.includes("_") && !x.includes("default");
              });
              if(!pkgs.includes(pack1)) return m.reply(`package ${pack1} tidak ditemukan\nPackage yang tersedia:\n- ${pkgs.join("\n- ")}`)
            axios
              .get(`https://${serverName1}/json-api/changepackage?api.version=1&user=${encodeURIComponent(uname1)}&pkg=${encodeURIComponent(pack1)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
              .then((e) => {
                console.log("Upgrade user package: " + JSON.stringify(e.data?.metadata?.reason || {}, null, 2));
                if (e.data?.metadata?.reason == "OK") {
                  let allowedPkg = pkgs.filter((x) => {
                    return pack1.toLowerCase().includes("whm") ? x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("admin") ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("ceo") ? !x.toLowerCase().includes("ceo") && !x.toLowerCase().includes("founder") : pack1.toLowerCase().includes("founder") ? true : false;
                  });
                  if (allowedPkg.length > 0) {
                    let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=1&enable_overselling_bandwidth=1&enable_overselling_diskspace=1&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
                    axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
                      if (e?.data?.metadata?.reason == "OK") {
                        let pkgDone = [];
                        for await (let pkg of allowedPkg) {
                          console.log(`Add package ${pkg} to ${uname1}`);
                          await axios
                            .get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                            .then((e) => {
                              if (e?.data?.metadata?.reason == "OK") {
                                console.log(`add package ${pkg} to ${uname1} success`);
                                pkgDone.push(pkg);
                              } else {
                                console.log({ error: `add package: ${pkg} to user: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
                              }
                            })
                            .catch((e) => {
                              console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
                            });
                        }
                        if (pkgDone.length > 0) m.reply(`add package berhasil\nlist package yang ditambah:\n- ${pkgDone.join("\n- ")}`);
                      } else console.log(`upgrade user ${uname1} to ${pack1} failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
                    });
                  }
                } else {
                  console.log({ error: `Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
                }
              })
              .catch((e) => {
                console.log({ error: `Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.response?.data || e, null, 2) });
              });
          })
          .catch((e) => {
            console.log(`upgrade user package to ${pack1} failed\nreason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
          });
        break                             
        case 'domain': case 'domain1':
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "zone";
            let apiToken1 = "token";
            let tld1 = "domain";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
        
        case 'domain2':
        function subDomain2(host, ip) {
          return new Promise((resolve2) => {
            let zone2 = "zone";
            let apiToken2 = "token";
            let tld2 = "domain";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld2, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken2,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve2({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err2 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err2Str = String(err2);
                resolve2({ success: false, error: err2Str });
              });
          });
        }

        let raw2 = args?.join(" ")?.trim();
        if (!raw2) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host2 = raw2
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host2) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip2 = raw2.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip2 || ip2.split(".").length < 4) return m.reply(ip2 ? "ip tidak valid" : "mana ip nya");

        subDomain2(host2, ip2).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break                           
            case 'domain3':
        function subDomain3(host, ip) {
          return new Promise((resolve3) => {
            let zone3 = "zone";
            let apiToken3 = "token";
            let tld3 = "domain";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone3}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld3, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken3,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve3({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err3 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err3Str = String(err3);
                resolve3({ success: false, error: err3Str });
              });
          });
        }

        let raw3 = args?.join(" ")?.trim();
        if (!raw3) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host3 = raw3
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host3) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip3 = raw3.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip3 || ip3.split(".").length < 4) return m.reply(ip3 ? "ip tidak valid" : "mana ip nya");

        subDomain3(host3, ip3).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
        case 'domain4':
        function subDomain4(host, ip) {
          return new Promise((resolve4) => {
            let zone4 = "zone";
            let apiToken4 = "token";
            let tld4 = "domain";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone4}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld4, content: ip.replace(/[^0-9.]/gi, ""), ttl: 4600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken4,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve4({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err4 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err4Str = String(err4);
                resolve4({ success: false, error: err4Str });
              });
          });
        }

        let raw4 = args?.join(" ")?.trim();
        if (!raw4) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host4 = raw4
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host4) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip4 = raw4.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip4 || ip4.split(".").length < 4) return m.reply(ip4 ? "ip tidak valid" : "mana ip nya");

        subDomain4(host4, ip4).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
        case 'domain5':
        function subDomain5(host, ip) {
          return new Promise((resolve5) => {
            let zone5 = "zone";
            let apiToken5 = "token";
            let tld5 = "domain";
            axios
              .post(
                `https://api.cloudflare.com/client/v5/zones/${zone5}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld5, content: ip.replace(/[^0-9.]/gi, ""), ttl: 5600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken5,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve5({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err5 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err5Str = String(err5);
                resolve5({ success: false, error: err5Str });
              });
          });
        }

        let raw5 = args?.join(" ")?.trim();
        if (!raw5) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host5 = raw5
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host5) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip5 = raw5.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip5 || ip5.split(".").length < 5) return m.reply(ip5 ? "ip tidak valid" : "mana ip nya");

        subDomain5(host5, ip5).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
        case 'domain6':
        function subDomain6(host, ip) {
          return new Promise((resolve6) => {
            let zone6 = "eror";
            let apiToken6 = "eror";
            let tld6 = "eror";
            axios
              .post(
                `https://api.cloudflare.com/client/v6/zones/${zone6}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld6, content: ip.replace(/[^0-9.]/gi, ""), ttl: 6600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken6,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve6({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err6 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err6Str = String(err6);
                resolve6({ success: false, error: err6Str });
              });
          });
        }

        let raw6 = args?.join(" ")?.trim();
        if (!raw6) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host6 = raw6
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host6) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip6 = raw6.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip6 || ip6.split(".").length < 6) return m.reply(ip6 ? "ip tidak valid" : "mana ip nya");

        subDomain6(host6, ip6).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
        case 'domain7':
        function subDomain7(host, ip) {
          return new Promise((resolve7) => {
            let zone7 = "eror";
            let apiToken7 = "eror";
            let tld7 = "eror";
            axios
              .post(
                `https://api.cloudflare.com/client/v7/zones/${zone7}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld7, content: ip.replace(/[^0-9.]/gi, ""), ttl: 7700, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken7,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve7({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err7 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err7Str = String(err7);
                resolve7({ success: false, error: err7Str });
              });
          });
        }

        let raw7 = args?.join(" ")?.trim();
        if (!raw7) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host7 = raw7
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host7) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip7 = raw7.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip7 || ip7.split(".").length < 7) return m.reply(ip7 ? "ip tidak valid" : "mana ip nya");

        subDomain7(host7, ip7).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			 if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    kurr.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
