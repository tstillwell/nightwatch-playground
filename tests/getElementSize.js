module.exports = {
  'Retrieve size of #main' : (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .waitForElementVisible('#main')
      .getElementSize('#main', (result) => {
        console.log(result)
      })
    }
};