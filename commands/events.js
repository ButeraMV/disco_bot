const fetch = require('node-fetch');
const moment = require('moment');

exports.run = (client, message, args) => {
  let upcoming = [];
  let output = [];
  let timeMin = '';
  let timeMax = '';
  let currentDay = new Date();
  let currentDayMoment = moment(currentDay).utcOffset(0)

  if (args.length === 0) {
    timeMin = currentDayMoment.hour(0)
      .minute(0)
      .seconds(1)
      .toISOString();
    timeMax = (moment(timeMin).add(1, 'days'))
      .hour(0)
      .minute(0)
      .seconds(1)
      .utcOffset(0)
      .toISOString();
  } else {
    if (/^[0-3][0-9]\/[0-3][0-9]/.test(args[0])) {
      timeMin = currentDayMoment.month(parseInt(args[0].substring(0, 2)) - 1)
        .date(args[0].substring(3))
        .hour(0)
        .minute(0)
        .seconds(1)
        .toISOString()
        .replace(/[.].*$/, "-04:00");

      timeMax = currentDayMoment.month(parseInt(args[0].substring(0, 2)) - 1)
        .date(parseInt(args[0].substring(3)))
        .hour(0)
        .minute(0)
        .seconds(1)
        .add(1, 'days')
        .toISOString()
        .replace(/[.].*$/, "-04:00");
    } else {
      message.channel.send("Please enter a valid date using 2 digits for the month and date (MM/DD).")
    }
  }

  fetch(`https://www.googleapis.com/calendar/v3/calendars/otpef10f3afpfs6u3ljcu2fsa0@group.calendar.google.com/events?orderBy=startTime&singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}&key=${process.env.GOOGLE_KEY}`)
    .then(function (response) { return response.json(); })
    .then(function (json) {
      for (let i = 0; i < json.items.length; i++) {
        upcoming.push({ "summary": json.items[i].summary, "location": json.items[i].location, "startTime": Date.parse(json.items[i].start.dateTime) })
      };

      for (let i = 0; i < upcoming.length; i++) {
        output.push([upcoming[i].summary, (json.items[i].start.dateTime).slice(5, 10).replace('-', '/') + ' at ' + (json.items[i].start.dateTime).slice(11, 16) + ' UTC', `https://www.${upcoming[i].location}`].join('\n'))
      };

      message.channel.send({
        embed: {
          color: 3447003,
          description: `${output.join('\n\n')}`
        }
      })
    })
    .catch(error => console.error(error))
};