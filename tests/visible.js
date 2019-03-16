module.exports = {
  '#main visible' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .assert.visible('#main')
  }
};