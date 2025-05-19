import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixtures/index';
import { UserBuilder } from '../src/helpers/builders/user.builder';

test('Авторизованный пользователь может просмотреть список статей', async ({
	webApp,
}) => {
	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate();

	await webApp.main.gotoLogin();

	await webApp.register.signup(randomUser);
	await expect(webApp.yourFeed.profileNameField).toContainText(
		randomUser.username,
	);
});

test('Авторизованный пользователь может просмотреть список статей v2', async ({
	loginPage,
}) => {
	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate();

	await loginPage.main.gotoLogin();

	await loginPage.register.signup(randomUser);
	await expect(loginPage.yourFeed.profileNameField).toContainText(
		randomUser.username,
	);
});
test('Авторизованный пользователь может просмотреть список статей v3', async ({
	regPageWithUser,
}) => {
	// todo дописать просмотр статей
	await expect(regPageWithUser.yourFeed.profileNameField).toContainText(
		randomUser.username,
	);
});
