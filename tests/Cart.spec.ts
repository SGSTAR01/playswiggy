import { test, expect } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { RestaurantListingPage } from '../src/pages/RestaurantListingPage';
import { CartPage } from '../src/pages/CartPage';
import logger from '../utils/logger';

test.describe('Cart Functionality', () => {

    test('Add item to cart and verify subtotal', async ({ page }) => {
        const landingPage = new LandingPage(page);
        const restaurantListingPage = new RestaurantListingPage(page);
        const cartPage = new CartPage(page);

        // Pre-requisite
        await landingPage.navigateTo('https://www.swiggy.com');
        await page.waitForLoadState('networkidle');
        await landingPage.enterLocation('Alipurduar');
        await landingPage.selectFirstSuggestion();
        await page.waitForLoadState('networkidle');

        await restaurantListingPage.searchForItem('Biryani');

        logger.info('Starting Cart Test');
        await restaurantListingPage.addFirstItemToCart();
        await cartPage.navigateToCart();
        
        const subtotal = await cartPage.getSubtotal();
        // Convert subtotal string to number if needed or check non-empty
        expect(subtotal).toBeTruthy();
        expect(subtotal).not.toBe('0');
    });
});
