import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LandingPageLocators } from '../locators/LandingPageLocators';
import logger from '../../utils/logger';

export class LandingPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async enterLocation(location: string) {
        logger.info(`Entering location: ${location}`);
        await this.page.locator(LandingPageLocators.locationInput).click();
        await this.page.locator(LandingPageLocators.locationInput).fill(location);
        // Wait for suggestions to appear
        // Use the first suggestion locator from the repo
        await this.page.waitForSelector(LandingPageLocators.firstSuggestion);
    }

    async selectFirstSuggestion() {
        logger.info('Selecting first suggestion');
        await this.page.locator(LandingPageLocators.firstSuggestion).first().click();

        // Handle potential redirection page (User reported: "Redirecting to /restaurants")
        try {
            logger.info('Waiting for redirection link');
            await (await this.page.waitForSelector(LandingPageLocators.redirectionLink)).click();
            logger.info('Redirection link found, clicking to proceed to restaurants page...');
        } catch (e) {
            // Ignore if not found, we might have successfully navigated already
            logger.info('No intermediate redirection page detected.');
        }
    }
}
