module.exports = {
  'https in url' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .assert.urlContains('https')
  }
};