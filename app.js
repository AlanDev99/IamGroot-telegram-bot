const { Telegraf } = require('telegraf');
const CONSTANTS = require("./constants");

const bot = new Telegraf(CONSTANTS.TELEGRAM_TOKEN);

bot.start((ctx) => {
    ctx.reply('I am Groot !! =D');
});

bot.hears(/(.*)/, ctx => {
    ctx.reply('I am Groot !!');
});

bot.launch();