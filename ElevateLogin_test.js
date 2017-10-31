
Feature('User should be able to Login/Logout from the website');

Scenario('Login Test', (I, homePage, loginPage) => {
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

Scenario('Logout Test', (I, homePage, elevateMenuPage, loginPage) => {
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

    elevateMenuPage.clickLogoutLink();

    //validate the login page is displayed correctly
    loginPage.validatePage();
});
