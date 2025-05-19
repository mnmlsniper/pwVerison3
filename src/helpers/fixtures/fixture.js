import { test as base } from '@playwright/test';
import { App } from '../../pagesV2/app.page';
import { UserBuilder } from '../builders/index';

export const test = base.extend({
	webApp: async ({ page }, use) => {
		let app = new App(page);
		await app.main.open();
		await use(app);
	},
	loginPage: async ({ page }, use) => {
		let app = new App(page);
		await app.main.open();
		await app.main.gotoLogin();
		await use(app);
		// все шаги ниже могут быть для удаления данных
		//	console.log('delete all');
	},
	//todo
	regPageWithUser: async ({ page }, use) => {
		const randomUser = new UserBuilder()
			.addEmail()
			.addPassword(14)
			.addUsername()
			.generate();

		let app = new App(page);
		await app.main.open();
		await app.main.gotoLogin();
		await app.register.signup(randomUser);
		await use(app);
		// все шаги ниже могут быть для удаления данных
		console.log('delete all');
	},
});
