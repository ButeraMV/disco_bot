const fetch = require('node-fetch');

exports.run = (client, message, args) => {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function (response) { return response.json(); })
    .then(function (json) {
      console.log(json);
      message.channel.send(response[0]);
    })
    .catch(error => console.error(error))
};