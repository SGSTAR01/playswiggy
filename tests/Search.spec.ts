import { test, expect } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { RestaurantListingPage } from '../src/pages/RestaurantListingPage';
import logger from '../utils/logger';

test.describe('Search Functionality', () => {

    test('Search for a food item', async ({ page }) => {
        const landingPage = new LandingPage(page);
        const restaurantListingPage = new RestaurantListingPage(page);
        
        // Pre-requisite: Enter location
        await landingPage.navigateTo('https://www.swiggy.com');
        await page.waitForLoadState('networkidle');
        await landingPage.enterLocation('Alipurduar'); // Using stable location
        await landingPage.selectFirstSuggestion();

        logger.info('Starting Search Test');
        await restaurantListingPage.searchForItem('Biryani');
        
        // Verification: Check if results appear (implicit in search success or explicit check)
        // Ideally checking for "Biryani" text in results
        await expect(page.locator("text=Biryani").first()).toBeVisible();
    });
});
