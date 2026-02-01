import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CartPageLocators } from '../locators/CartPageLocators';
import logger from '../../utils/logger';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToCart() {
        logger.info("Navigating to cart");
        await this.page.locator(CartPageLocators.checkoutButton).click();
        
        logger.info("Waiting for subtotal to be visible");
        await this.page.locator(CartPageLocators.subtotalText).waitFor({ state: 'visible' });
    }

    async getSubtotal(): Promise<string> {
        logger.info("Reading subtotal from cart page");
        const value = await this.page.locator(CartPageLocators.subtotalText).innerText();
        logger.info(`Subtotal read: ${value}`);
        return value;
    }
}
