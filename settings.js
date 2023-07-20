

const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Owner Setting
global.owner = ['6281219244302'] //Owner Number
global.ownernomer = "6281219244302" //Owner Number 02
global.ownername = "Shiro-Chan" //Owner NMe
global.ytname = "YouTube: issei otaku desu" //YouTube Owner
global.socialm = "GitHub: https://github.com/" //Github Owner
global.location = "🇮🇩 Indonesia" //Country

//Bot Setting
global.botname = "Shiro-Betav6"
global.ownernumber = '6281219244302'
global.ownername = 'Shiro-Chan'
global.ownerNumber = ["6281219244302@s.whatsapp.net"]
global.ownerweb = "https://shironimeeid-en1.shironimeeid.repl.co/"
global.websitex = "https://instagram.com/sora.zami"
global.wagc = "https://chat.whatsapp.com/"
global.themeemoji = '🚩'
global.wm = "ShiroBot"
global.botscript = 'https://www.youtube.com/@kizakixd' //script link
global.packname = "By ShiroBot"
global.author = "OneeChan Bakaa!!"
global.creator = "6281219244302@s.whatsapp.net"
global.prefa = ['','!','.','#','&','`']
global.hituet = 0
global.apikeyai = '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' //Apikey OpenAi

//media target
global.thum = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})