import BasePage from './base-page';
import { Locator, Page } from '@playwright/test';

export default class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#ap_email');
    this.passwordInput = page.locator('#ap_password');
    this.continueButton = page.locator('#continue[type="submit"]');
    this.submitButton = page.locator('#signInSubmit');
  }

  async login(email: string, password: string) {
    await this.fill(this.emailInput, email);
    await this.click(this.continueButton);
    await this.fill(this.passwordInput, password);
    await this.click(this.submitButton);
  }
}