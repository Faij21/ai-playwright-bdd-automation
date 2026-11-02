import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pageFixtures';

const { Given, When, Then } = createBdd(test);

Given('I open the suiteondemand home page', async ({ loginPage }) => {
    await loginPage.openHomePage();
});

When('I log in with username {string} and password {string}', async ({ loginPage }, user: string, password: string) => {
    await loginPage.login(user, password);
});

When('I log in with user and password', async ({ loginPage }) => {
    const user = process.env.USER;
    const password = process.env.PASSWORD;

    if (!user || !password) {
        throw new Error('USER or PASSWORD is missing in .env');
    }

    await loginPage.login(user, password);
});


Then('I should see the profile icon', async ({ loginPage }) => {
    await loginPage.verifyProfileIcon();
});

Then('I should still see the {string} field', async ({ loginPage }, fieldName: string) => {
    if (fieldName === 'Username') {
        await expect(loginPage.usernameField).toBeVisible();
    } else if (fieldName === 'Password') {
        await expect(loginPage.passwordField).toBeVisible();
    } else {
        throw new Error(`Unsupported field: ${fieldName}`);
    }
});


