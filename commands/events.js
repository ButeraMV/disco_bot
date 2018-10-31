const fetch = require('node-fetch');

exports.run = (client, message, args) => {
  let upcoming = [];
  let startDate = new Date();
  // startDate = new Date(startDate).toISOString();
  let endDate = startDate.setDate(startDate.getDate() + 1);
  endDate = new Date(endDate).toISOString();
  let minTime = '';
  let maxTime = '';

  if (args.length === 0) {
    minTime = (new Date().toISOString());
    maxTime = endDate;
  } else {
    console.log(args)
  }

  // 2018-10-31T14:51:06-05:00

  fetch(`https://www.googleapis.com/calendar/v3/calendars/otpef10f3afpfs6u3ljcu2fsa0@group.calendar.google.com/events?maxResults=5&key=${process.env.GOOGLE_KEY}`)
    .then(function (response) { return response.json(); })
    .then(function (json) {
      for (let i = 0; i < json.items.length; i++) {
        upcoming.push(json.items[i].summary)
      }
      // console.log(upcoming)
      // message.channel.send('```\n' + upcoming.join('\n\n') + '\n```');
      message.channel.send({ embed: {
        color: 3447003,
        description: `${upcoming.join('\n\n')}`
      }})
    })
    .catch(error => console.error(error))
};