
/// <reference path="./steps.d.ts" />

Feature('Contacts');

Scenario('Add a Contact', (I, homePage, loginPage, elevateMenuPage, addContactPage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.login('kyletice@rocketmail.com','kyle');
    elevateMenuPage.clickAddContactLink();
    addContactPage.addContact();

});

Scenario('Search for a Contact by Name', (I, homePage, loginPage, elevateMenuPage, searchContactPage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.login('kyletice@rocketmail.com','kyle');
    elevateMenuPage.clickSearchContactLink();
    searchContactPage.searchContactsByName('Adolf');
    searchContactPage.validateContactShowsInTable('Adolf','Carroll');
});

Scenario('View All Contacts', (I, homePage, loginPage, elevateMenuPage, searchContactPage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.login('kyletice@rocketmail.com','kyle');
    elevateMenuPage.clickViewAllContactLink();
    searchContactPage.clickAllButton();
    searchContactPage.validateContactShowsInTable('Adolf','Carroll');
    searchContactPage.validateContactShowsInTable('Isabell', 'Ward');
});