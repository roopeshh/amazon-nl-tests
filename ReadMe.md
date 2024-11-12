# Amazon.nl End-to-End Test Automation

## Introduction

This project is designed to perform automated testing of functionalities of amazon.nl website using Playwright, Typescript.

## Project structure

```
amazon-nl-testing/
├── src/
│   ├── config/            # Configuration files
│   ├── pages/             # Pages
│   ├── tests/             # Test files
├── .env                   # Environment variables
├── playwright.config.ts   # Playwright config
└── package.json           # Project metadata and scripts
```

## Prerequisites

- **Node.js**: Version 22
- **Yarn**: Package manager for installing dependencies
- **Windows**: PowerShell or Command Prompt
- **MacBook**: Terminal
- VS Code or any other IDEs to look at the project structure

## Setting up project

- Clone the repository - https://github.com/roopeshh/amazon-nl-tests
- Navigate to the project directory:
  ```bash
  cd amazon-nl-testing
  ```
- Install dependencies:
  ```bash
  yarn install
  ```
- Duplicate `.env.example` and rename it to `.env`
  - add your test amazon.nl `user email`
  - add your test amazon.nl `password`
  - add your test amazon.nl `first name` of the user

## Running the tests

- Run all tests:

  ```bash
  yarn test
  ```

- Run tests in headed mode:

  ```bash
  yarn test:ui
  ```

- Run a specific test file:

  ```bash
  yarn test tests/amazon.spec.ts
  ```

- Run tests with specific project (e.g., Chromium):
  ```bash
  npx playwright test --project=Chromium
  ```

## Test report

- Once the tests are run, html report is generated in the folder `reports` and you can open `index.html` and it shows the report
- In case of failed tests, the report also records screenshot, video and traces for the failed tests.

## Continuous Integration

This project is integrated with GitHub Actions. The workflow file (`.github/workflows/e2e-tests.yml`) is configured to run on every push to the `main` branch. After the tests, it uploads the html test report to GitHub Actions artifacts.

Note: On CI the tests fail. Instead of navigating to home page, it goes to captcha as security check which does not happen when we run the tests locally.

## Test cases

You can find the test cases document [here](https://github.com/roopeshh/amazon-nl-tests/blob/main/TestCases.md)

## Test framework

You can find details on the design of framework [here](https://github.com/roopeshh/amazon-nl-tests/blob/main/Description.md)
