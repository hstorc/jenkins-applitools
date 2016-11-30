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

eyes.open(driver, 'Applitools', 'Taltz Homepage'/*a little annoying */)
    .then(function(driver) {
        driver.get('https://www.taltz.com/index.html');
        eyes.checkWindow('taltz jenkins');
        driver.quit();
        eyes.close();
    });
