const { Given, When, Then } = require("@wdio/cucumber-framework");
const assert = require("assert");

Given(/^user is on eBay homepage$/, async () => {
  await browser.url("https://www.ebay.com");
  await browser.maximizeWindow();
  const logo = await $("//*[@id='gh-logo']");
  assert(await logo.isDisplayed());
});

When(/^user searches for (.*)$/, async (example) => {
  const inputSearch = await $('[type="search"]');
  await inputSearch.setValue(example);

  const btnSearch = await $('[type="submit"]');
  await btnSearch.click();
});

When(/^user selects Computers\/Tablets & Networking category$/, async () => {
  const dropdownAllCat = await $("//select[@id='gh-cat']");
  await dropdownAllCat.selectByVisibleText("Computers/Tablets & Networking");

  const btnSearch = await $("//input[@id='gh-btn']");
  await btnSearch.click();
});

Then(/^user verifies search results$/, async () => {
  await browser.waitUntil(
    async () => {
      await $("mainContent").isDisplayed();
    }
  );

  const firstResult = await $(
    "//span[contains(@class,'BOLD')]"
  );
  const firstResultText = await firstResult.getText();
  assert.ok(
    firstResultText.includes(browser.config.params.example),
    `First result should include "${browser.config.params.example}"`
  );
});
