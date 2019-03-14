const fs = require('fs');
const outFilePath = './tests_output/out.txt'

module.exports = {
  'Output to file' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatchjs')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .getText("#main", (result) => {
        fs.writeFile(outFilePath, result.value);
      })
      .end();
  }
};