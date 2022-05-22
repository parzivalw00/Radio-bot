const express = require('express');
const app = express();
const prefix = "!";
const token = "YOUR-TOKEN";
const port = 5005;

const {
    video_urls
} = require("./config.json");
app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => 
    console.log(`Example app listening at https://loclhost:${port}`)
);

//=============================== Bot =================================

const Discord = require("discord.js");
const bot = new Discord.Client();
const {id, id_1, error, success } = require('./config.json');


bot.on('ready', () => {
    const channel = bot.channels.cache.get(`${id}`);
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(true);
        connection.voice.setSelfMute(false);
        console.log(`${success}`);
    })
    .catch(e => {
        console.eroor(e);
     });
});


bot.on("ready", () => {
    const targetguild = bot.guilds.cache.get("812033108940816384");
    const activities = [
        {name: '1', type: 'STREAMING', url: "https://www.twitch.tv/trikanoid"},
        {name: '2', type: 'LISTENING'}
    ];

    setInterval(function(){
        setTimeout(function(){
            bot.user.setStatus('online')
        }, 1000);

        setTimeout(function(){
            bot.user.setStatus('dnd')
        }, 1500);

        setTimeout(function(){
            bot.user.setStatus('idle')
        }, 2000);
    }, 3000);
    let activity = 1;
    setInterval(() => {
        activities[2] = {name: `parzival`, type: `WATCHING`};
        activities[3] = {name: `parzival`, type: `WATCHING`};
        activities[4] = {name: `parzival`, type: `PLAYING`};
        if (activity > 4) activity = 0;
        bot.user.setActivity(activities[activity]);
        activity++;
     },1500);
     console.log(`${bot.user.tag} Is Running Activitys Set Shod !`);
});


bot.on("message", async (message) => {
    if (message.content === prefix + "start") {
    const voiceChannel = bot.channels.cache.get("971728497657655316")
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
        return message.channel.send("Hello, i come to your channel.")
    })
    }
});
// ======================================================================

bot.login(token);
