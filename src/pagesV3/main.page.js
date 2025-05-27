import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
	constructor(page) {
		super(page);
		this.signupButton = page.getByRole('link', { name: 'Sign up' });
	}
	async gotoLogin() {
		return test.step('Кликнуть на кнопку', async () => {
			await this.signupButton.click();
		});
	}
}
