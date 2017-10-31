
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
  }

}
