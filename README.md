# Swiggy Automation Framework

This project is a **Playwright** automation framework designed to test the Swiggy web application. It uses **TypeScript** and follows the **Page Object Model (POM)** design pattern for maintainability and scalability.

## 🚀 Features

-   **Playwright** for reliable and fast end-to-end testing.
-   **TypeScript** for type safety and better developer experience.
-   **Page Object Model (POM)** to separate test logic from page details.
-   **Winston Logger** for structured logging.
-   **Network Idle Waits** for handling dynamic content loading.

## 📋 Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or higher recommended)
-   [pnpm](https://pnpm.io/) (Package Manager)

## 🛠️ Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd playswiggy
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## 📂 Project Structure

```text
d:\playswiggy
├── src
│   ├── locators   # Centralized locator definitions
│   ├── pages      # Page Object classes (LandingPage, CartPage, etc.)
│   └── utils      # Utility functions (Logger, etc.)
├── tests          # Test specifications (*.spec.ts)
├── playwright.config.ts # Playwright configuration
├── package.json   # Dependencies and scripts
└── README.md      # Project documentation
```

## 🏃‍♂️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/Cart.spec.ts
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

## 📊 Viewing Reports

After the test run completes, an HTML report is generated automatically. To view it:

```bash
npx playwright show-report
```

## 📝 Logging

The framework uses **Winston** for logging. Logs are printed to the console during test execution to provide insights into the test flow (e.g., "Navigating to...", "Entering location...", "Waiting for...").

## 🧪 Test Scenarios Covered

-   **Location**: Verifies location entry and selection.
-   **Search**: Tests searching for items/restaurants.
-   **Filters**: Validates filtering of search results.
-   **Cart**: Checks adding items to the cart and subtotal verification.
