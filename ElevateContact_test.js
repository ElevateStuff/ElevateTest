
/// <reference path="./steps.d.ts" />

Feature('Contacts');

Scenario('Add a Contact', (I, homePage, loginPage, elevateMenuPage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.sendForm('kyletice@rocketmail.com','kyle');
    elevateMenuPage.clickAddContactLink();

});
