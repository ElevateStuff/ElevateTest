
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  contactHeader: {xpath: "//h3[contains(text(),'Contact')]"},
  contactTypeText: {xpath: "//label[contains(text(),'Contact Type')]"},
  firstNameText: {xpath: "//label[contains(text(),'First Name')]"},
  lastNameText: {xpath: "//label[contains(text(),'Last Name')]"},
  middleNameText: {xpath: "//label[contains(text(),'Middle Name')]"},
  prefixText: {xpath: "//label[contains(text(),'Prefix')]"},
  suffixText: {xpath: "//label[contains(text(),'Suffix')]"},
  genderText: {xpath: "//label[contains(text(),'Gender')]"},
  birthdayText: {xpath: "//label[contains(text(),'Birthday')]"},
  address1Text: {xpath: "//label[contains(text(),'Address 1')]"},
  address2Text: {xpath: "//label[contains(text(),'Address 2')]"},
  cityText: {xpath: "//label[contains(text(),'City')]"},
  stateText: {xpath: "//label[contains(text(),'State')]"},
  zipCodeText: {xpath: "//label[contains(text(),'Zip Code')]"},
  cellPhoneText: {xpath: "//label[contains(text(),'Cell Phone')]"},
  homePhoneText: {xpath: "//label[contains(text(),'Home Phone')]"},
  workPhoneText: {xpath: "//label[contains(text(),'Work Phone')]"},
  employerText: {xpath: "//label[contains(text(),'Employer')]"},
  emailText: {xpath: "//label[contains(text(),'Email')]"},
  notesText: {xpath: "//label[contains(text(),'Notes')]"},

  contactTypeDropDown: {xpath: "//select[@id='customerType']"},
  firstNameTextBox: {xpath: "//input[@id='fName']"},
  lastNameTextBox: {xpath: "//input[@id='lName']"},
  middleNameTextBox: {xpath: "//input[@id='mName']"},
  prefixTextBox: {xpath: "//input[@id='prefix']"},
  suffixTextBox: {xpath: "//input[@id='suffix']"},
  genderDropDown: {xpath: "//select[@id='gender']"},
  dateOfBirthTextBox: {xpath: "//input[@id='dob']"},
  address1TextBox: {xpath: "//input[@id='address1']"},
  address2TextBox: {xpath: "//input[@id='address2']"},
  cityTextBox: {xpath: "//input[@id='city']"},
  stateDropDown: {xpath: "//select[@id='state']"},
  zipTextBox: {xpath: "//input[@id='zip']"},
  cellPhoneTextBox: {xpath: "//input[@id='cellPhone']"},
  homePhoneTextBox: {xpath: "//input[@id='homePhone']"},
  workPhoneTextBox: {xpath: "//input[@id='workPhone']"},
  employerDropDown: {xpath: "//select[@id='employer-chosen']"},
  emailAddressTextBox: {xpath: "//input[@id='emailAddress']"},
  notesTextBox: {xpath: "//textarea[@id='notes']"},

  addCustomerButton: {xpath: "//input[@id='addCustomer']"},
  addNewPolButton: {xpath: "//input[@id='addNewPol']"},
  cancelCustomerButton: {xpath: "//input[@id='cancelCustomer']"},

  spouseText: {xpath: "//h3[contains(text(),'Spouse')]"},
  addSpouseButton: {xpath: "//div[@id='showSpouse']"},
  removeSpouseButton: {xpath: "//div[contains(text(),'Remove Spouse')]"},
  spouseNameText: {xpath: "//label[@for='spouseName']"},
  spouseGenderText: {xpath: "//label[@for='spouseGender']"},
  spouseDOBText: {xpath: "//label[@for='spouseDob']"},

  spouseNameTextBox: {xpath: "//input[@id='spouseName']"},
  spouseGenderDropDown: {xpath: "//select[@id='spouseGender']"},
  spouseDOBTextBox: {xpath: "//input[@id='spouseDOB']"},

  childText: {xpath: "//h3[contains(text(),'Child')]"},
  addAnotherChildButton: {xpath: "//div[@id='addAnotherChild']"},
  removeChildButton: {xpath: "//span[@id='remove']"},
  childNameText: {xpath: "//label[@for='childName[1]']"},
  childGenderText: {xpath: "//label[@for='gender']"},
  childDOBText: {xpath: "//label[@for='msk-childDob-1']"},

  childNameTextBox: {xpath: "//input[@id='childName[1]']"},
  childGenderDropDown: {xpath: "//select[@id='childGender[1]']"},
  childDOBTextBox: {xpath: "//input[@id='msk-childDOB-1']"},

  //customer Added text
  customerAddedText: {xpath: "//button[contains(text(),'added successfully.  Feel free to add another customer.')]"},
  customerAddedCloseButton: {xpath: "//button[@class='close']"},

  //methods

  addContact() {
    var faker = require('faker');
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    I.waitForVisible(this.contactTypeDropDown, 30);
    I.selectOption(this.contactTypeDropDown, 'Lead');
    I.fillField(this.firstNameTextBox, firstName);
    I.fillField(this.lastNameTextBox, lastName);
    I.fillField(this.middleNameTextBox, faker.name.firstName());
    I.fillField(this.prefixTextBox, faker.name.prefix());
    I.fillField(this.suffixTextBox, faker.name.suffix());
    I.selectOption(this.genderDropDown, 'Male');
    I.fillField(this.dateOfBirthTextBox, '01/05/1995');
    I.fillField(this.address1TextBox, faker.address.streetAddress());
    I.fillField(this.address2TextBox, faker.address.secondaryAddress());
    I.fillField(this.cityTextBox, faker.address.city());
    I.selectOption(this.stateDropDown, faker.address.stateAbbr());
    I.fillField(this.zipTextBox, faker.address.zipCode());
    I.fillField(this.cellPhoneTextBox, faker.phone.phoneNumber('###-###-####'));
    I.fillField(this.homePhoneTextBox, faker.phone.phoneNumber('###-###-####'));
    I.fillField(this.workPhoneTextBox, faker.phone.phoneNumber('###-###-####'));
    //I.selectOption(this.employerDropDown, '');
    I.fillField(this.emailAddressTextBox, faker.internet.email());
    I.fillField(this.notesTextBox, faker.lorem.sentences(5));

    I.click(this.addCustomerButton);

    //Validate the customer added message displays
    I.waitForVisible("//strong[contains(text(),'" + firstName + " " + lastName + "')]", 30);
    I.see(firstName + " " + lastName);
    I.click(this.customerAddedCloseButton);
  }

}
