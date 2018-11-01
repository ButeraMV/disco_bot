const fetch = require('node-fetch');

exports.run = (client, message, args) => {
  let upcoming = [];
  let output = [];
  let startDate = new Date();
  let endDate = startDate.setDate(startDate.getDate() + 1);
  endDate = new Date(endDate).toISOString();
  let timeMin = '';
  let timeMax = '';

  if (args.length === 0) {
    timeMin = (new Date().toISOString());
    timeMax = endDate;
  } else {
    message.channel.send("Still working on that...")
  }

  fetch(`https://www.googleapis.com/calendar/v3/calendars/otpef10f3afpfs6u3ljcu2fsa0@group.calendar.google.com/events?maxResults=5&timeMin=${timeMin}&timeMax=${timeMax}&key=${process.env.GOOGLE_KEY}`)
    .then(function (response) { return response.json(); })
    .then(function (json) {
      for (let i = 0; i < json.items.length; i++) {
        upcoming.push({"summary": json.items[i].summary, "location": json.items[i].location, "startTime": Date.parse(json.items[i].start.dateTime)})
      };

      let formattedTime = '';

      for (let i = 0; i < upcoming.length; i++) {
        let timeToFormat = (json.items[i].start.dateTime).slice(11, 16)

        if (timeToFormat.slice(0, 2) > 12) {
          let hours = timeToFormat.slice(0, 2) - 12;
          formattedTime = (hours + ':' + timeToFormat.slice(3, 5) + 'PM')
        }

        output.push([upcoming[i].summary, (json.items[i].start.dateTime).slice(5, 10).replace('-','/') + ' at ' + formattedTime, `https://www.${upcoming[i].location}`].join('\n'))
      };

      message.channel.send({ embed: {
        color: 3447003,
        description: `${output.join('\n\n')}`
      }})
    })
    .catch(error => console.error(error))
};