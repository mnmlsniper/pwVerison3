import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/builders/user.builder';
import { App } from '../src/pagesV3/app.page';

test('Авторизованный пользователь может просмотреть список статей', async ({
	page,
}) => {
	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate();
	// todo спрятать app инициализацию
	let app = new App(page);

	await app.main.open();
	await app.main.gotoLogin();

	/*	await app.register.signup(randomUser);
	await expect(app.yourFeed.profileNameField).toContainText(
		randomUser.username,
	); */
});
