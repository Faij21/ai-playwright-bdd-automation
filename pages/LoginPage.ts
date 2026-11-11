import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page
    readonly recentlyViewedTab: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recentlyViewedTab = page.getByRole('heading', { name: 'Recently Viewed' });
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log In', exact: true });

    }

    async openHomePage() {
        await this.page.goto(process.env.BASE_URL || "Check your .env file for BASE_URL");
    }

    async login(user: string, password: string) {
        await this.usernameField.fill(user);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyProfileIcon() {
        await expect(this.page.getByRole('button', { name: ' Will Westin ' })).toBeVisible();
    }

    async verifyProfileIconNotVisible() {
        await expect(this.page.getByRole('button', { name: ' Will Westin ' })).not.toBeVisible();
    }
}