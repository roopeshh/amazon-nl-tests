import BasePage from './base-page';
import { Page, Locator, expect } from '@playwright/test';

export default class SearchResultsPage extends BasePage {
  readonly productTitles: Locator;
  readonly productLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.productTitles = page.locator('[data-cy="title-recipe"]');
    this.productLinks = page.locator('[data-cy="image-container"]');
  }

  async verifySearchResults(searchTerm: string) {
    const firstProductTitle = await this.productTitles.first().textContent();
    expect(firstProductTitle?.toLowerCase()).toContain(searchTerm.toLowerCase());
  }

  async selectFirstProduct() {
    await this.productLinks.first().click();
  }
}