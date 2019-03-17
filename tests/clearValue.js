module.exports = {
  '#main visible' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .pause(1000)
      .clearValue('input[type=text]')
      .pause(1000)
  }
};