import { Page } from '@playwright/test';
import logger from '../../utils/logger';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        logger.info(`Navigating to ${url}`);
        await this.page.goto(url);
    }

    async wait(ms: number) {
        logger.info(`Waiting for ${ms} ms`);
        await this.page.waitForTimeout(ms);
    }

    async getTitle() {
        return await this.page.title();
    }
}
