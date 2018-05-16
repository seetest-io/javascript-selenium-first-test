"use strict";
var webdriverio = require('webdriverio');

function main() {

  let options = {
    host: 'cloud.seetest.io',
    protocol: 'https',
    port: 443,
    path: '',  
    desiredCapabilities: {
        browserName: 'internet explorer',
        accessKey: "<YOUR ACCESS KEY>",
        testName: "Javascript IE Test"
      }
  };

  webdriverio
    .remote(options)
    .init()
    .url('https://www.seetest.io')
    .click("//*[text()='Manual']")
    .click("//*[text()='Automation']")
    .click("//*[text()='Webinars']")
    .getTitle().then(function (title) {
        console.log('Title was: ' + title);
    })
    .getText("(//h2)[1]").then(function(text){
      console.log("The title of the first H2 is: ", text);
    })
    .end()
    .catch(function (err) {
        console.log(err);
    });
  }

main();
