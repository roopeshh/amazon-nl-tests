import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import SearchResultsPage from '../pages/search-results-page';
import ProductPage from '../pages/product-page';
import CartPage from '../pages/cart-page';
import CheckoutPage from '../pages/checkout-page';
import { config } from '../config/config'

test.describe('Checkout', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let searchResultsPage: SearchResultsPage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    searchResultsPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await homePage.navigate('/');
    await homePage.acceptCookies();
    await homePage.clickOnLoginNavigationLink();
    await loginPage.login(config.username, config.password);
    await homePage.verifyUserIsLoggedIn();
  });


  test('add a product to cart and checkout', async ({ page }) => {
    await homePage.searchForProduct('apple iphone 16 pro');
    await searchResultsPage.verifySearchResults('apple iphone 16 pro');
    await searchResultsPage.selectFirstProduct();
    await productPage.addProductToCart();
    await productPage.goToCart();
    await cartPage.verifyProductIsInCart('apple iphone 16 pro');
    await cartPage.proceedToCheckout();
    await checkoutPage.verifyCheckoutForm();
  });

  test.afterEach(async ({ page }) => {
    await checkoutPage.goBackToCart();
    await cartPage.deleteItemFromCart();
  });

});