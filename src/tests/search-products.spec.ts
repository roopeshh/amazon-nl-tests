import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import SearchResultsPage from '../pages/search-results-page';
import ProductPage from '../pages/product-page';
import CartPage from '../pages/cart-page';
import { config } from '../config/config'

test.describe('Search', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let searchResultsPage: SearchResultsPage;
  let productPage: ProductPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    searchResultsPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);

    await homePage.navigate('/');
    await homePage.acceptCookies();
    await homePage.clickOnLoginNavigationLink();
    await loginPage.login(config.username, config.password);
    await homePage.verifyUserIsLoggedIn();
  });

  const testData = [
    { category: 'Boeken', searchTerm: 'harry potter' },
    { category: 'Elektronica', searchTerm: 'apple iphone 16 pro' },
    { category: 'Prime Video', searchTerm: 'godzilla' },
  ];

  testData.forEach(({ category, searchTerm }) => {
    test(`search for a product by category ${category}`, async ({ page }) => {
      await homePage.selectCategory(category);      
      await homePage.searchForProduct(searchTerm);
      await searchResultsPage.verifySearchResults(searchTerm);
    });
  });
});