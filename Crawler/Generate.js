var Crawler = require("js-crawler");

new Crawler().configure({depth: 3})
  .crawl("https://test.elevatesolutions.co/login.html", function(page) {
    console.log(page.url);
    //console.log(page.content);
  }, function(response) {
    console.log("ERROR occurred:");
    console.log(response.status);
    console.log(response.url);
    console.log(response.referer);
  });