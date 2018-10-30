var request = require('request');
var fs = require('fs');
var https = require('https');
var secret = require('./secret');

console.log("Welcome to the Github avatar downloader");

var myargv = process.argv.slice(2);

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

getRepoContributors(myargv[0], myargv[1], function (err, result) {
  if (err) {
    console.log('Errors: ', err);
  }
  result.forEach(function (list) {
    downloadImageByURL(list.avatar_url, './avatarimgs/' + list.login + ".jpg");
  });
});


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


