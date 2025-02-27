const { test } = require('@playwright/test');
const { Language } = require('./language');

test.describe.parallel('Settings', () => {
  test(`Locales`, async ({ browser, page }) => {
    const language = new Language(browser, page);
    await language.init(true, true);
    await language.test();
  });
});
