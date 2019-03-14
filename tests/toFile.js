const fs = require('fs');
const outFilePath = './tests/out.txt'

module.exports = {
  'Output to file' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch js')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .getText("#main", (result) => {
        fs.writeFile(outFilePath, result.value, () => {
          console.log('Output file written')}
        )}
      )
      .end();
  }
};