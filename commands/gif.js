var giphy = require('giphy-api')(process.env.GIPHY_KEY);

exports.run = (client, message, args) => {
  giphy.search({"q": args, "limit": "10", "rating": "r"}).then(function (response) {
    message.channel.send(response.data[Math.floor(Math.random() * (10 - 1) + 1)].url);
  });
};