'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  fields: {
    email: "//input[@name='username']",
    password: "//input[@name='password']"
  },
  submitButton: {css: '#login'},

  // introducing methods
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}
