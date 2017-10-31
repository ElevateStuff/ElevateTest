
/// <reference path="./steps.d.ts" />

Feature('User should be able to Login to the website');

Scenario('Login Test', (I, loginPage, homePage) => {
    homePage.validatePage();
    homePage.clickLoginButton();
    loginPage.login('kyletice@rocketmail.com','kyle');
    
    //Validations
    I.see('Home');
    I.see('Contact');
    I.see('Business');
    I.see('Cards');
    I.see('Map');
    I.see('FAQ');
    I.see('My Account');
    I.see('Logout');
});
