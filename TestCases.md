# Amazon.nl Test Cases

This document outlines the test cases that have been automated for Amazon.nl using the Playwright framework.

## Test Case 1: Login Test

**Description:** This test case verifies the login functionality of Amazon.nl.

**Preconditions:**

- A valid Amazon.nl account with credentials.
- The test environment should be set up and configured (refer to the README for setup instructions).

**Steps:**

- **Navigate to Amazon.nl:**

  - Open a web browser.
  - Go to `https://www.amazon.nl/`.

- **Navigate to Login Page:**

  - Click on the "Sign In" button.

- **Login:**
  - Enter your email address in the "Email or mobile phone number" field.
  - Click the "Continue" button.
  - Enter your password in the "Password" field.
  - Click the "Sign In" button.

**Expected Results:**

- The user should be able to successfully log in.
- The website should display an indication that the user is logged in.

## Test Case 2: Search Product by Category Test

**Description:** This test case verifies the functionality of searching for products by category on Amazon.nl.

**Preconditions:**

- Valid user should already be logged in to the app `https://www.amazon.nl/`.
- User is already on the homepage.

**Steps:**

- **Search by category**
  - Next to the search area click on the drop down.
  - Select a category Books
  - Enter the search term `harry potter` in the search box
  - Click on search icon

**Expected Results:**

- The website should display list of books with title matching harry potter.
- The page should clearly indicate that the results are for the "Books" category.

## Test Case 3: Checkout Product Test

**Description:** This test case verifies the process of adding a product to the cart and proceeding to checkout on Amazon.nl.

**Preconditions:**

- Valid user should already be logged in to the app `https://www.amazon.nl/`.
- User is already on the homepage.

**Steps:**

- **Search for a product**

  - Enter `iphone 16 pro` text into search box
  - Click on search button

- **Select a Product:**

  - Select a product in the search results to view its details.

- **Add Product to Cart:**

  - On the product page, click the "Add to Cart" button.

- **Proceed to Cart:**

  - Navigate to the cart page (usually by clicking the cart icon).

- **Proceed to Checkout:**
  - Verify that the added product is in the cart page
  - On the cart page, click the "Proceed to Checkout" button.

**Expected Results:**

- The user should be able to add a product to the cart.
- The user should be able to proceed to the checkout page without errors.
- The checkout page should display the correct product and allow the user to continue the checkout process.
