import BasePage from './base-page';
import { Page, Locator, expect } from '@playwright/test';

export default class CartPage extends BasePage {
  readonly proceedToCheckoutButton: Locator;
  readonly productTitles: Locator;
  readonly deleteItem: Locator;

  constructor(page: Page) {
    super(page);
    this.proceedToCheckoutButton = page.locator('[data-feature-id="proceed-to-checkout-action"]');
    this.productTitles = page.locator('ul.sc-item-content-list[role="presentation"]');
    this.deleteItem = page.locator('[data-feature-id="item-delete-button"]');
  }

  async proceedToCheckout() {
    await this.click(this.proceedToCheckoutButton);
  }

  async verifyProductIsInCart(productName: string) {
    const productTitle = await this.getText(this.productTitles.first());
    expect(productTitle.toLowerCase()).toContain(productName.toLowerCase());
  }

  async deleteItemFromCart() {
    await this.click(this.deleteItem);
    expect(this.productTitles.first()).not.toBeVisible();
  }
}
