import BasePage from './base-page';
import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config/config';

export default class HomePage extends BasePage {
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly acceptCookiesButton: Locator;
  readonly welcomeUserText: Locator;
  readonly logInNavigation: Locator;
  readonly categoryDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('[type="submit"]');
    this.acceptCookiesButton = page.locator('#sp-cc-accept');
    this.welcomeUserText = page.locator('#nav-link-accountList-nav-line-1');
    this.logInNavigation = page.locator('#nav-link-accountList');
    this.categoryDropdown = page.locator('select#searchDropdownBox');
  }

  async acceptCookies() {
    await this.click(this.acceptCookiesButton);
  }

  async clickOnLoginNavigationLink() {
    await this.click(this.logInNavigation);
  }

  async searchForProduct(searchTerm: string) {
    await this.fill(this.searchBox, searchTerm);
    await this.click(this.searchButton);
  }

  async selectCategory(category: string) {
    await this.categoryDropdown.selectOption({ label: category });
  }

  async verifyUserIsLoggedIn() {
    expect(await this.getText(this.welcomeUserText)).toContain(`Hallo, ${config.firstName}`);
  }
}
