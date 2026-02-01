import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { RestaurantListingPageLocators } from '../locators/RestaurantListingPageLocators';
import { CartPageLocators } from '../locators/CartPageLocators';
import logger from '../../utils/logger';

export class RestaurantListingPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async searchForItem(item: string) {
        logger.info(`Searching for item: ${item}`);
        await this.page.locator(RestaurantListingPageLocators.searchButton).click();
        await this.page.locator(RestaurantListingPageLocators.searchInput).fill(item);
        await this.page.locator(RestaurantListingPageLocators.searchInput).press('Enter');
    }

    async applyVegFilter() {
        logger.info('Applying veg filter');
        await this.page.locator(RestaurantListingPageLocators.vegFilterToggle).click();
    }

    async isFilterApplied(): Promise<boolean> {
        return await this.page.locator(RestaurantListingPageLocators.vegFilterToggle).isEnabled();
    }

    async addFirstItemToCart() {
        logger.info("Adding first restaurant's first item to cart");
        await this.page.locator(RestaurantListingPageLocators.firstRestaurant).nth(1).click({delay:1000});
        const addItemButton = this.page.locator(RestaurantListingPageLocators.firstAddItemButton);
        await addItemButton.click({delay:1000});
        logger.info("Add to cart click performed");
    }
}
