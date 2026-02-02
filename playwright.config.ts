import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["list"]],
  use: {
    baseURL: "https://www.swiggy.com",
    trace: "on-first-retry",
    screenshot: "on",
    video: "on",

    // Options to bypass blocking

    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--disable-blink-features=AutomationControlled",
            "--disable-blink-features=AutomationControlled,HideOwnIpAddresses",
          ],
        },
      },
    },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     launchOptions: {
    //       firefoxUserPrefs: {
    //         "dom.webdriver.enabled": false,
    //         "useAutomationExtension": false,
    //         "privacy.resistFingerprinting": true,
    //       },
    //     },
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
