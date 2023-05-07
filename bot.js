require("dotenv").config()
const {Telegraf} = require("telegraf");
const axios = require("axios");

const omdbApiKey = process.env.OMDB_API_KEY;
const TelegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

const bot = new Telegraf(TelegramBotToken);

bot.start((ctx) => {
    const message = `Hello *${ctx.chat.first_name}*\n` +
                    `Send the name of a movie or TV series to receive information about it`;

    ctx.reply(message, {parse_mode: "Markdown"});
});

bot.on("message", (ctx) => {
    axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${ctx.message.text}`)
        .then((response) => {
            let title = response.data["Title"];
            let year = response.data["Year"];
            let rating = response.data["Rated"];
            let released = response.data["Released"];
            let genre = response.data["Genre"];
            let imdbRating = response.data["imdbRating"];
            let imageUrl = response.data["Poster"];

            const caption = `*Title*: ${title}\n` +
                            `*Year*: ${year}\n` +
                            `*Rating*: ${rating}\n` +
                            `*Released*: ${released}\n` +
                            `*Genre*: ${genre}\n` +
                            `*IMDB Rating*: ${imdbRating}\n`;
            
            ctx.replyWithPhoto(
                {url: imageUrl},
                { caption: caption, parse_mode: "Markdown"}
            )
            .catch(() => {
                ctx.reply("Sorry, I couldn't find information for that movie or TV series.");
            })
        })
});

bot.launch();
