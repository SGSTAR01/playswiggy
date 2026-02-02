import { test, expect } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { RestaurantListingPage } from '../src/pages/RestaurantListingPage';
import logger from '../utils/logger';

test.describe('Filters Functionality', () => {

    test('Apply Veg Only filter', async ({ page }) => {
        const landingPage = new LandingPage(page);
        const restaurantListingPage = new RestaurantListingPage(page);

        // Pre-requisite: Enter location
        await landingPage.navigateTo('https://www.swiggy.com');
        await page.waitForLoadState('networkidle');
        await landingPage.enterLocation('Alipurduar');
        await landingPage.selectFirstSuggestion();
        await page.waitForLoadState('networkidle');

        // Pre-requisite: Search for item
        await restaurantListingPage.searchForItem('Biriyani');

        logger.info('Starting Filters Test');
        await restaurantListingPage.applyVegFilter();
        
        const isApplied = await restaurantListingPage.isFilterApplied();
        expect(isApplied).toBeTruthy();
    });
});
