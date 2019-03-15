module.exports = {
  'Expect element #main' : (browser) => {
    browser
      .url('http://www.google.com')
      .expect.element('#main').to.be.present;
  }
};