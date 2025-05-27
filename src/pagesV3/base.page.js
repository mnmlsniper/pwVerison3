import { test } from '@playwright/test';

export class BasePage {
	constructor(page) {
		this.page = page;
	}
	async open() {
		return test.step('Открыть страницу', async () => {
			// todo урл унести в конфиги
			await this.page.goto('https://realworld.qa.guru/');
			///https://vue3-realworld-example-app-mutoe.vercel.app/#/register
			//	'https://realworld.qa.guru/'
		});
	}
}
