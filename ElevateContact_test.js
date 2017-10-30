
/// <reference path="./steps.d.ts" />

Feature('Contacts');

Scenario('Add a Contact', (I, homePage, loginPage, elevateMenuPage, addContactPage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.sendForm('kyletice@rocketmail.com','kyle');
    elevateMenuPage.clickAddContactLink();
    addContactPage.addContact();

});
