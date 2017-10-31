'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  email: {xpath: "//input[@name='username']"},
  password: {xpath: "//input[@name='password']"},
  submitButton: {css: '#login'},

  // introducing methods
  login(email, password) {
    I.fillField(this.email, email);
    I.fillField(this.password, password);
    I.click(this.submitButton);
  }
}
