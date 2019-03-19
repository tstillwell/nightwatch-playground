module.exports = {
  'Get current cookies' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch js')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .getCookies( cookie => {
        console.log(cookie);
      })
  }
};