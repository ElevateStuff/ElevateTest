
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  selectDesignText: {xpath: "//h3[contains(text(),'Select Design')]"},
  cardContentText: {xpath: "//h3[contains(text(),'Card Content')]"},
  cardContentTextArea: {xpath: "//textarea[@id='cardMessageBox']"},
  changeReturnAddressButton: {xpath: "//button[@id='updateFromAddress']"},
  cancelCardButton: {xpath: "//button[@id='cancelCard']"},
  previewCardButton: {xpath: "//button[@id='previewCard']"},
  contactsToReceiveCardText: {xpath: "//h3[contains(text(),'Contacts to Receive this Card')]"},
  contactCardsTable: {xpath: "//table[@id='contactCards']"},

  //Return Address
  returnAddress1TextBox: {xpath: "//input[@class='fromAddress1']"},
  returnAddress2TextBox: {xpath: "//input[@class='fromAddress2']"},
  returnCityTextBox: {xpath: "//input[@class='fromCity']"},
  returnStateTextBox: {xpath: "//input[@class='fromState']"},
  returnZipTextBox: {xpath: "//input[@class='fromZip']"},

  validatePage(){

  },

  validateTableData(name, address, contactType) {
    I.see(name);
    I.see(address);
    I.see(contactType);
  }

}
