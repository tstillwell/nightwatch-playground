module.exports = {
  '#main visible' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body',time=100)
  }
};