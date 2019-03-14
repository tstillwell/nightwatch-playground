const fs = require('fs');

module.exports = {
  'Output to file' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .getText("#main", (result) => {
        fs.writeFile("./tests_output/out.txt", result.value);
      })
      .end();
  }
};