const fs = require('fs');
const outFilePath = './tests/out.txt'

module.exports = {
  'Get #main text' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch js')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .getText('#main', (text) => {
        console.log(text);
      })
  }
};