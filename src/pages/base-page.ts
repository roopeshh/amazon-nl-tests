import { Page, Locator } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    // The page is reloaded because sometimes it is navigating to a wrong page
    await this.page.reload();
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    const text = await locator.textContent();
    if (text === null) {
      throw new Error('Text content is null');
    }
    return text;
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }
}