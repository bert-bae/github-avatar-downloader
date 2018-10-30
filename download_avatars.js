var request = require('request');
var fs = require('fs');
var https = require('https');
var secret = require('./secret');

console.log("Welcome to the Github avatar downloader");

var myargv = process.argv.slice(2);

// get access to the github API
function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + secret.GITHUB_TOKEN
    }
  };

  var arrayImgs = [];
  request(options, function(err, response, body) {
    var data = JSON.parse(body);
    callback(err, data);
  });
}

// using fs to download images via the url provided in the callback below
function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function(err) {
      if(response.statusCode !== 200) {
        console.log("Error occurred: " + response.statusCode);
      }
    })
    .on('response', function(response) {
      console.log('Starting the download!');
    })
    .on('end', function(){
      console.log("Download complete.");
    })
    .pipe(fs.createWriteStream(filePath));
}

// callback function to get the avatar_url and to save it using the user's login
getRepoContributors(myargv[0], myargv[1], function (err, result) {
  if (myargv[0] || myargv[1] === undefined) {
    console.log("Entry invalid. Please enter the repo owner and name as such:  node download_avatars.js [repoOwner] [repoName]");
    return;
  }
  if (err) {
    console.log('Errors: ', err);
  }
  result.forEach(function (list) {
    downloadImageByURL(list.avatar_url, './avatarimgs/' + list.login + ".jpg");
  });
});

