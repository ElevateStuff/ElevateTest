
/// <reference path="./steps.d.ts" />

Feature('Elevate Solutions Home Page Test');

Scenario('Validate Elevate Solutions Home Page', (I) => {
      I.amOnPage('https://test.elevatesolutions.co/');
      I.see('LEARN MORE');
      I.see('LOGIN');
});
