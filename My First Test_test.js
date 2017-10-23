
/// <reference path="./steps.d.ts" />

Feature('Google Test');

Scenario('test something', (I) => {
      I.amOnPage('https://www.google.com');
      I.see('Google');
});
