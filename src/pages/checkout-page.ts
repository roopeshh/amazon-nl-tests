import BasePage from './base-page';
import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config/config';

export default class CartPage extends BasePage {
  readonly checkoutAddressCountry: Locator;
  readonly checkoutAddressName: Locator;
  
  constructor(page: Page) {
    super(page);
    this.checkoutAddressCountry = page.locator('#address-ui-widgets-countryCode');
    this.checkoutAddressName = page.locator('#address-ui-widgets-enterAddressFullName');
  }

  async goBackToCart() {
    await this.goBack();
  }
  
  async verifyCheckoutForm() {
    const addressCountry = await this.checkoutAddressCountry.textContent();
    const addressName = await this.checkoutAddressName.textContent();
    expect(addressCountry).toContain('Nederland');
    expect(addressName).toContain(config.firstName)
  }
}