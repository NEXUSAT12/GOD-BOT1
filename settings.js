const chalk = require("chalk")
const fs = require("fs")
const env = require('dotenv')
//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner =  process.env.OWNER_NUMBER || '918130784851' //ur owner number
global.ownernomer = process.env.OWNER_NUMBER || "918130784851" //ur owner number2
global.ownername = process.env.OWNER_NAME === undefined ? '༺⟬☤⟭༻NEXUS༺⟬☤⟭༻' : process.env.OWNER_NAME,//ur owner name
global.ytname = "TG: https://t.me/HACkERGuru2" //ur yt chanel name
global.socialm = "GitHub: NEXUSAT12" //ur github or insta name
global.location = "India, delhi , kalu sarai " //ur location

//new
global.botname =  process.env.BOT_NAME === undefined ? "ɢᴏᴅ ʙᴏᴛ ᴍᴅ ᴠ1" : process.env.BOT_NAME,
global.ownernumber =  process.env.OWNER_NUMBER || '918130784851' 
global.ownername = process.env.OWNER_NAME === undefined ? '༺⟬☤⟭༻NEXUS༺⟬☤⟭༻' : process.env.OWNER_NAME,
global.ownerNumber = ["918130784851@s.whatsapp.net"]
global.ownerweb = "https://superprofile.bio/lucifercreator"
global.websitex = "https://youtu.be/L_SIk59QeAU"
global.wagc = "https://chat.whatsapp.com/H2yL8sXuUsd2K1wuYydjnb"
global.themeemoji =  process.env.THEMEMOJI || "👑" 
global.wm = "༺⟬☤⟭༻."
global.botscript = 'https://github.com/NEXUSAT12/GOD-BOT1' //script link
global.packname =  process.env.PACK_NAME || 'MADE BY MASTER NEXUS',
global.author = process.env.PACK_AUTHER || '༺⟬☤⟭༻NEXUS༺⟬☤⟭༻',
global.creator = "918130784851@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0
global.theme = process.env.THEME || 'LUFFY',
//media target
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: ' ❥𝗛𝗘𝗥𝗘 𝗘𝗡𝗝𝗢𝗬☙ ', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
