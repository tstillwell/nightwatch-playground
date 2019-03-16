module.exports = {
  'body visible in <100ms' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body',time=1000)
  }
};