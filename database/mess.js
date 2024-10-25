require("./global")

const mess = {
   wait: "<!> `Wait Again for Dick Process`",
   success: "<!> `Full Success Veri-veri good`",
   on: "*`[ On Feature ]` - Already Active*", 
   off: "*`[ Off Feature ]` - It's Off *",
   query: {
       text: "<!> `Where's the text bro?`",
       link: "<!> `Link Nya Mana Kak?`",
   },
   error: {
       fitur: "<!> `Sorry,  the feature has error. Please chat with the Bot Developer so it can be fixed immediately.`",
   },
   only: {
       group: "<!> `This feature can only be accessed within a group`",
       private: "<!> `This feature can only be accessed in private chat`",
       owner: "<!> `WHO ARE YOU?`",
       admin: "</> `THIS FEATURE CAN ONLY BE ACCESSED BY ADMIN!!!`",
       badmin: "<!> make bot as admin to be able to use this`",
       premium: "<!> `This feature is only for premium members`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})