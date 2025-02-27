const screen = {
  width: 640,
  height: 480
};

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder()
		.forBrowser('selenium-webdriver/chrome')
		.setChromeOptions(new chrome.Options().headless().windowSize(screen))
		.build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q'));
    await driver.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
