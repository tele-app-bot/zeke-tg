

const {Telegraf} = require('telegraf')

const TOKEN = '6964169050:AAFZ1SBbvPnLSzksplB4AH2D-F1TTRWeMYA'
const bot = new Telegraf(TOKEN)

const web_link = 'https://dynamic-kangaroo-ac1639.netlify.app/'

bot.start((ctx) => 

ctx.replyWithPhoto(
    {url:'https://v.etsystatic.com/video/upload/q_auto/0100_a4ibnz.jpg'}, 
    // { caption: "cat photo", 
    {reply_markup: {inline_keyboard: [[{text: "Open Zeke", web_app:{url: web_link}}]]}}
)

)

bot.launch()