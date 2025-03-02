const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is on login page$/, async () => {
  await browser.url("http://the-internet.herokuapp.com/login");
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
  await $("#username").setValue(username);
  await $("#password").setValue(password);
});

When(/^click on login button$/, async () => {
  await $('button[type="submit"]').click();
});

Then(/^this (.*) is displayed$/, async (message) => {
  await expect($("#flash")).toHaveText(expect.stringContaining(message));
});
