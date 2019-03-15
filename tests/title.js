module.exports = {
  'Google in title' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .assert.titleContains('Google')
  }
};