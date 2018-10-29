var request = require('request');

console.log("Welcome to the Github avatar downloader");

function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    header: {
      'User-agent': 'request'
    }
  };


  request(url, function(err, response, body) {
    callback(err, body);
  });
}

getRepoContributors("https://github.com/nodejs/node", "test2", function (err, result) {
  console.log('Errors: ', err);
  console.log('Results: ', result);
});