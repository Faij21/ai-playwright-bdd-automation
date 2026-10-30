import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pageFixtures';

const { Given, When, Then } = createBdd(test);

Given('I open the BrokerLOS home page', async ({ loginPage }) => {
    await loginPage.openHomePage();
});

When('I click the {string} link', async ({ loginPage }, linkName: string) => {

    if (linkName === 'Sign In') {
        await loginPage.clickSignIn();
    } else {
        throw new Error(`Unsupported link: ${linkName}`);
    }
});

When('I log in with email {string} and password {string}', async ({ loginPage }, email: string, password: string) => {
    await loginPage.login(email, password);
});

Then('I should see the {string} link', async ({ loginPage }, linkName: string) => {
    await expect(loginPage.signInLink).toBeVisible();
});

Then('I should still see the {string} field', async ({ loginPage }, fieldName: string) => {
    if (fieldName === 'Email') {
        await expect(loginPage.emailField).toBeVisible();
    } else if (fieldName === 'Password') {
        await expect(loginPage.passwordField).toBeVisible();
    } else {
        throw new Error(`Unsupported field: ${fieldName}`);
    }
});

Then('I should see the error {string}', async ({ page }, message: string) => {
    await expect(page.getByText(message)).toBeVisible();
});

Then('I should see the {string} text', async ({ page }, message: string) => {
    await expect(page.getByText(message)).toBeVisible();
});
