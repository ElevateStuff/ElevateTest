
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  nameTextBox: {xpath: "//input[@id='name']"},
  cityTextBox: {xpath: "//input[@id='city']"},
  stateDropDown: {xpath: "//select[@id='state-chosenx']"},
  contactTypeTextBox: {xpath: "//input[@value='Contact Type...']"},
  searchButton: {xpath: "//button[@id='search']"},

  resultsText: {xpath: "//h3[contains(@class='panel-title']"},

  //View All items on Page
  allButton: {xpath: "//button[contains(text(),'All')]"},
  viewContactDetails: {xpath: "//input[@value='View Contact Details']"},
  allContactsText: {xpath: "//strong[contains(text(),'All Contacts')]"},

  //Send Cards To Contact Page
  sendCardsToContactsButton: {xpath: "//button[contains(text(),'Send a Card to These Contacts')]"},
  selectAllCheckBox: {xpath: "//input[@id='selectAll']"},

  searchContactsByName(name) {
    I.waitForVisible(this.nameTextBox, 30);
    I.fillField(this.nameTextBox, name);
    I.click(this.searchButton);
  },

  searchContactsByCity(city) {
    I.waitForVisible(this.cityTextBox, 30);
    I.fillField(this.cityTextBox, city);
    I.click(this.searchButton);
  },

  searchContactsByState(state) {
    I.waitForVisible(this.cityTextBox, 30);
    I.selectOption(this.stateDropDown, state);
    I.click(this.searchButton);
  },

  searchContactsByContactType(contactType) {
    I.waitForVisible(this.contactTypeTextBox, 30);
    I.fillField(this.contactTypeTextBox, contactType);
    I.click(this.searchButton);
  },

  validateContactShowsInTable(firstName, lastName) {
    I.see(firstName);
    I.see(lastName);
  },

  validateAllContacts() {
    I.waitForVisible(this.allButton, 30);
    I.see(this.allContactsText);
  },

  clickAllButton() {
    I.click(this.allButton);
  },

  clickSendCardsToContactButton() {
    I.click(this.sendCardsToContactsButton);
  }

}
