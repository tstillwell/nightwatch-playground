module.exports = {
  'Move to #navcnt element' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .moveToElement('#navcnt', 0, 0)
      .pause(1000)
  }
};