const fetch = require('node-fetch');

exports.run = (client, message, args) => {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function (response) {
      bot.sendMessage({
        to: channelID,
        message: response[0]
      })
    })
    .catch(error => console.error(error))
};