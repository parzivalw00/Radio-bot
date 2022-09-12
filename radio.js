const express = require('express')
const app = express()
const port = 5005;
const {
    video_urls
} = require("./config.json")
app.get('/', (req, res) => res.send('Bot Is Working Well!'))
app.listen(port, () => 
    console.log(`Example app listening at https://loclhost:${port}`)
);

//=============================== Bot =================================

const Discord = require("discord.js");
const bot = new Discord.Client();
const bot2 = new Discord.Client();
const bot3 = new Discord.Client();
const bot4 = new Discord.Client();
const bot5 = new Discord.Client();
const {error, success } = require('./config.json')


bot.on("ready", () => {
    const targetguild = bot.guilds.cache.get('976580118191411200')
    bot.user.setActivity("RADIO DANCE", {type: 'LISTENING'})
    const voiceChannel = bot.channels.cache.get("971728641736196106")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('RADIO DANCE')
        .setDescription('INPUT :\n```js\n const stream = video_urls[Math.floor(Math.random() * video_urls.length)]```\nOUTPUT :\n```js\n dispatcher.on("finish", () => {play(connection)})```')

        const textChannel = bot.channels.cache.get('975624421492527134')
        .send(embed);
    })
});
// ======================================================================

bot2.on("ready", () => {
    const targetguild = bot2.guilds.cache.get('976580118191411200')
    bot2.user.setActivity("RADIO JAVAN", {type: 'LISTENING'})
    const voiceChannel = bot2.channels.cache.get("971728646010208256")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('RADIO JAVAN')
        .setDescription('INPUT :\n```js\n const stream = video_urls[Math.floor(Math.random() * video_urls.length)]```\nOUTPUT :\n```js\n dispatcher.on("finish", () => {play(connection)})```')

        const textChannel = bot2.channels.cache.get('975624421492527134')
        .send(embed);
    })
});
// ======================================================================

bot3.on("ready", () => {
    const targetguild = bot3.guilds.cache.get('976580118191411200')
    bot3.user.setActivity("RADIO CHILL", {type: 'LISTENING'})
    const voiceChannel = bot3.channels.cache.get("975624470771417118")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('RADIO CHILL')
        .setDescription('INPUT :\n```js\n const stream = video_urls[Math.floor(Math.random() * video_urls.length)]```\nOUTPUT :\n```js\n dispatcher.on("finish", () => {play(connection)})```')

        const textChannel = bot3.channels.cache.get('975624421492527134')
        .send(embed);
    })
});
// ======================================================================

bot4.on("ready", () => {
    const targetguild = bot4.guilds.cache.get('976580118191411200')
    bot4.user.setActivity("RADIO RAP", {type: 'LISTENING'})
    const voiceChannel = bot4.channels.cache.get("975624657883529256")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('RADIO RAP')
        .setDescription('INPUT :\n```js\n const stream = video_urls[Math.floor(Math.random() * video_urls.length)]```\nOUTPUT :\n```js\n dispatcher.on("finish", () => {play(connection)})```')

        const textChannel = bot4.channels.cache.get('975624421492527134')
        .send(embed);
    })
});
// ======================================================================

bot5.on("ready", () => {
    const targetguild = bot5.guilds.cache.get('976580118191411200')
    bot5.user.setActivity("RADIO BASS", {type: 'LISTENING'})
    const voiceChannel = bot5.channels.cache.get("971728658249179166")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('RADIO BASS')
        .setDescription('INPUT :\n```js\n const stream = video_urls[Math.floor(Math.random() * video_urls.length)]```\nOUTPUT :\n```js\n dispatcher.on("finish", () => {play(connection)})```')

        const textChannel = bot5.channels.cache.get('975624421492527134')
        .send(embed);
    })
});

// ======================================================================
bot.login("##############################");
bot2.login("##############################");
bot3.login("##############################");
bot4.login("##############################");
bot5.login("##############################");
