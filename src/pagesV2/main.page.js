import { test } from '@playwright/test';

export class MainPage {
	constructor(page) {
		this.page = page;
		this.signupButton = page.getByRole('link', { name: 'Sign up' });
	}

	async open() {
		return test.step('Открыть страницу', async () => {
			// todo урл унести в конфиги
			await this.page.goto('https://realworld.qa.guru/');
		});
	}

	async gotoLogin() {
		return test.step('Кликнуть на кнопку', async () => {
			await this.signupButton.click();
		});
	}
}
