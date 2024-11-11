import BasePage from './base-page';
import { Page, Locator } from '@playwright/test';

export default class ProductPage extends BasePage {
  readonly addToCartButton: Locator;
  readonly goToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.goToCartButton = page.locator('#sw-gtc');
  }

  async addProductToCart() {
    await this.click(this.addToCartButton);
  }

  async goToCart() {
    await this.click(this.goToCartButton);
  }
}