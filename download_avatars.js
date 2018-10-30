var request = require('request');
var secret = require('./secret');

console.log("Welcome to the Github avatar downloader");

function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + secret.GITHUB_TOKEN
    }
  };


  request(options, function(err, response, body) {
    callback(err, body);
  });
}

getRepoContributors("jquery", "jquery", function (err, result) {
  console.log('Errors: ', err);
  console.log('Results: ', result);
});