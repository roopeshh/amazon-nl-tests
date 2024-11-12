import { test } from '@playwright/test';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import SearchResultsPage from '../pages/search-results-page';
import { config } from '../config/config';

test.describe('Search', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    searchResultsPage = new SearchResultsPage(page);

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
    test(`search for a product by category ${category}`, async () => {
      await homePage.selectCategory(category);
      await homePage.searchForProduct(searchTerm);
      await searchResultsPage.verifySearchResults(searchTerm);
    });
  });
});
