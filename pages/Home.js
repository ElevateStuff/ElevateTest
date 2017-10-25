'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  loginButton: {xpath: "//a[@href='/login.html']"},
  learnMoreButton: {xpath: "//a[@href='#about']"},

  validatePage() {
    I.amOnPage('https://test.elevatesolutions.co/');
    I.see('LOGIN');
    I.see('LEARN MORE');
  },

  clickLoginButton() {
    I.click(this.loginButton);
  },

  clickLearnMoreButton() {
    I.click(this.learnMoreButton);
  }
}
