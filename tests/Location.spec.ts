import { test, expect } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import logger from '../utils/logger';

test.describe('Location Functionality', () => {

    test('Verify redirection after entering a location', async ({ page }) => {
        const landingPage = new LandingPage(page);
        logger.info('Starting Location Test');

        await landingPage.navigateTo('https://www.swiggy.com');
        await page.waitForLoadState('networkidle');
        await landingPage.enterLocation('Alipurduar');
        await landingPage.selectFirstSuggestion();
        await page.waitForLoadState('networkidle');

        // Verification: URL or Element check
        await expect(page).toHaveURL(/.*restaurants.*/);
    });
});
