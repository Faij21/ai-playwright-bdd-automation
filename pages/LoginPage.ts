import type { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page
    readonly signInLink: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: 'Sign In' });
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign In', exact: true });

    }

    async openHomePage() {
        await this.page.goto('https://crm.devbrokerlos.com/');
    }

    async clickSignIn() {
        await this.signInLink.click();
    }

    async login(email: string, password: string) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}