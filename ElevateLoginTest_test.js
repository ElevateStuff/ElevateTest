
/// <reference path="./steps.d.ts" />

Feature('User should be able to Login to the website');

Scenario('Login Test', (I, loginPage, homePage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.sendForm('kyletice@rocketmail.com','kyle');
    I.see('');
});
