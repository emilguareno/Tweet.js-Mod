var Twitter = require('twitter');
var credentials = require('./credentials');

exports.handler = function (event, context) {
  console.log('Received event:', event)
  getTweets(event, function (err, data) {
    data = { "response": data }
    context.done(err, data)
  })
}

function getTweets(event, done) {
  var client = new Twitter(credentials);
  client.get(event.request.url, event.request.parameters, function (error, tweets, response) {
    done(error, tweets);
  });
}