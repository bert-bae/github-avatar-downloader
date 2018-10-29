var request = require('request');

function getRepoContributors(repoOwner, repoName, callback) {

}

getRepoContributors("https://github.com/nodejs/node", "test2", function (err, result) {
  console.log('Errors: ', err);
  console.log('Results: ', result);
});