
/// <reference path="./steps.d.ts" />

Feature('User should be able to Login to the website');

Scenario('Login Test', (I, loginPage) => {
    I.amOnPage('https://test.elevatesolutions.co/');
    I.see('LEARN MORE');
    I.see('LOGIN');
    I.click('LOGIN');
    loginPage.sendForm('kyletice@rocketmail.com','kyle');
    I.see('');
});
