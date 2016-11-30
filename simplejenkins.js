var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var Eyes = require('eyes.selenium').Eyes;
var eyes = new Eyes();
// This is your api key, make sure you use it in all your tests.
eyes.setApiKey('pf991yE4J9106dZ96FlYXzyzk4bOZXq6Nok6yEcKeAEXWU110');
eyes.setForceFullPageScreenshot(true);
eyes.setBatch("Taltz Homepage", '7791');

// Start visual testing with browser viewport set to 1024x768.
// Make sure to use the driver returned through 'then' from this point on.
eyes.open(driver, 'Applitools', 'Taltz Homepage'/*a little annoying */)
    .then(function(driver) {
        driver.get('https://www.taltz.com/index.html');

        // Visual validation point #1
       eyes.checkWindow('taltz jenkins');

       // driver.findElement(webdriver.By.css('body > div.modal.modal-hcp-url.is-visible > div > a.button-large.uppercase.continue.wt-taltz-1.js-set-hcp-cookie.wt-enteringAgree')).click();
       // eyes.checkWindow('after agree');
        //driver.executeScript("window.scrollTo(0, document.body.scrollHeight)"); 
        //driver.manage().timeouts().implicitlyWait(1000);       //
        // Visual validation point #2
        //eyes.checkWindow('ghost vote after scroll');

        driver.quit();

        // End visual testing. Validate visual correctness.
        eyes.close();
    });
