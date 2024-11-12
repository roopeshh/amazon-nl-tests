import { test } from '@playwright/test';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import { config } from '../config/config';

test.describe('Login', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test('login with a valid user', async () => {
    // Go to the home page
    await homePage.navigate('/');
    await homePage.acceptCookies();

    // Go to the login page and login
    await homePage.clickOnLoginNavigationLink();
    await loginPage.login(config.username, config.password);

    // Verify the user is logged in
    await homePage.verifyUserIsLoggedIn();
  });
});
