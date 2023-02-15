const express = require('express');
const bodyParser = require('body-parser');
const { EmbedBuilder, WebhookClient } = require('discord.js');
const dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

const webhookClient = new WebhookClient({ url: process.env.DISCORD_WEBHOOK_URL });

const app = express();

app.use(bodyParser.json());

app.use(cors());

// const corsOptions = {
//     origin: 'http://127.0.0.1:5500' // replace with your frontend's URL
// };
  
app.post('/send-message', (req, res) => {
   
    const message = req.body.message; 

    let answers = message.answerArray.toString();

    const embed = new EmbedBuilder()
        .setTitle(answers)
        .setColor(0x00FFFF);

    webhookClient.send({
        content: message.testNumber,
        username: message.imie,
        avatarURL: 'https://i.imgur.com/AfFp7pu.png',
        embeds: [embed],
    });
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});