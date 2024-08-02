const { Given, When, Then } = require("@wdio/cucumber-framework");
const assert = require("assert");

Given(/^user is on eBay homepage$/, async () => {
  await browser.url("https://www.ebay.com");
  await browser.maximizeWindow();
  const logo = await $("//*[@id='gh-logo']");
  assert(await logo.isDisplayed());
});

When(/^user navigates to Cell Phones & accessories$/, async () => {
  const btnSearch = await $("//input[@id='gh-btn']");
  await btnSearch.click();

  const catElectonic = await $(
    "//a[contains(@href, 'electronics') and contains(text(), 'Electronics')]"
  );
  await catElectonic.click();

  const catPhone = await $(
    "//a[contains(@class, 'cat-url') and contains(text(), 'Cell Phones, Smart Watches & Accessories')]"
  );
  await catPhone.click();
});

When(/^user selects Cell Phones & Smartphones$/, async () => {
  const catSmartPhone = await $(
    "//a[contains(text(),'Cell Phones & Smartphones')]"
  );
  await catSmartPhone.click();
});

When(/^user applies filters Condition, Price, and Item location$/, async () => {
  const btnAllFilter = await $(
    "//button[@type='button' and contains(text(), 'All Filters')]"
  );
  await btnAllFilter.click();

  const filterCondition = await $(
    "//span[contains(@class, 'x-overlay-aspect__label') and contains(text(), 'Condition')]"
  );
  await filterCondition.click();
  const conbditionNew = await $("//input[@aria-label='Condition: new']");
  await conbditionNew.click();

  const filterPrice = await $("//span[contains(text(),'Price')]");
  await filterPrice.click();
  const minPirce = await $("//input[@aria-label='Minimum Value, US Dollar']");
  await minPirce.click().setValue("100");
  const maxPrice = await $("//input[@aria-label='Maximum Value, US Dollar']");
  await maxPrice.click().setValue("200");

  const filterLocation = await $("//span[contains(text(),'Item Location')]");
  await filterLocation.click();
  const itemLocationFilter = await $('[aria-label="Item Location"]');
  await itemLocationFilter.click();
  const optionUSOnly = await $("//input[@aria-label='Item Location: US Only']");
  await optionUSOnly.click();

  const applyFiltersButton = await $(
    "//button[@type='button' and contains(text(), 'Apply')]"
  );
  await applyFiltersButton.click();
});

Then(/^user verifies filters are applied$/, async () => {
  const filterTags = await $(
    "//span[contains(text(),'(3) Filter(s) selected')]"
  );
  assert(await filterTags.isDisplayed());
});
