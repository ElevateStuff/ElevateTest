'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },

   // setting locators
   homeLink: {xpath: "//div[contains(text(),'Home')]"},

  contactLink: {xpath: "//div[contains(text(),'Contact')]"},
    searchDropDownOpen: {xpath: "//li[@class='dropdown open']"},
    searchContactLink: {xpath: "//li[@class='dropdown open']//a[@href='/searchCustomer.html']"},
    addContactLink: {xpath: "//li[@class='dropdown open']//a[contains(text(),'Add Contact')]"},
    viewAllContactLink: {xpath: "//li[@class='dropdown open']//a[@href='/searchCustomer.html?ALL']"},
    sendACardtoContactLink: {xpath: "//li[@class='dropdown open']//a[@href='/mCards.html']"},

   businessLink: {xpath: "//div[contains(text(),'Business')]"},
   cardsLink: {xpath: "///div[contains(text(),'Cards')]"},
   mapLink: {xpath: "//div[contains(text(),'Map')]"},
   fAQLink: {xpath: "//div[contains(text(),'FAQ')]"},
   myAccountLink: {xpath: "//div[contains(text(),'My Account')]"},
   logoutLink: {xpath: "//div[contains(text(),'Logout')]"},

   clickAddContactLink() {
    I.click(this.contactLink);
    I.waitForVisible(this.searchDropDownOpen, 30);
    I.click(this.addContactLink);
  },

  clickSearchContactLink() {
    I.click(this.contactLink);
    I.waitForVisible(this.searchDropDownOpen, 30);
    I.click(this.searchContactLink);
  },

  clickViewAllContactLink() {
    I.click(this.contactLink);
    I.waitForVisible(this.searchDropDownOpen, 30);
    I.click(this.viewAllContactLink);
  },

  clickSendACardToContactLink() {
    I.click(this.contactLink);
    I.waitForVisible(this.searchDropDownOpen, 30);
    I.click(this.sendACardtoContactLink);
  }

}
