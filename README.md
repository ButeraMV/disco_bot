## DiscoBot

DiscoBot is a small Discord Bot written in JavaScript utilizing the Discord.JS library.

To run this locally you will need to clone the repo, and provide an .env file that includes:

BOT_KEY= [ Your Discord Bot Secret Here ]

GIPHY_KEY=[ Your Giphy API Key Here ]

GOOGLE_KEY=[ Your Google API Key (with Google Calendar Enabled) Here ]

### Commands

Currently there are only a handful of commands:

!gif [search terms] - Searches giphy for a random .gif pertaining to your search terms (!gif cat => cat .gif)

!roll - Roll the dice! Replies with a value between 1 and 6 with a mention to the sender

!roll20 - Works the same as !roll but 'throws' a d20 instead of a d6

!ron - Replies with a random Ron Swanson quote