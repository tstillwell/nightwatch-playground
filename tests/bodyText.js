module.exports = {
  'Google Search Text' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .getText("#main", (result) => {
        console.log(result.value);
      })
      .end();
  }
};