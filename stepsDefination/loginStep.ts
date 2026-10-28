import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open the BrokerLOS home page', async ({ page }) => {
    await page.goto('https://crm.devbrokerlos.com/');
});

When('I click the {string} link', async ({ page }, linkName: string) => {
    await page.getByRole('link', { name: linkName }).click();

});

Then('I should see the {string} link', async ({ page }, linkName: string) => {
    await expect(page.getByRole('link', { name: linkName })).toBeVisible();
});

Then('I should see the {string} field', async ({ page }, fieldName: string) => {
    await expect(page.getByRole('textbox', { name: fieldName })).toBeVisible();
});

When('I log in with email {string} and password {string}', async ({ page }, email: string, password: string) => {
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
});

Then('I should still see the {string} field', async ({ page }, fieldName: string) => {
    await expect(page.getByRole('textbox', { name: fieldName })).toBeVisible();
});

Then('I should see {string}', async ({ page }, message: string) => {
    await expect(page.getByText(message)).toBeVisible();
});
