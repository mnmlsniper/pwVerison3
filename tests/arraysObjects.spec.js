import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const register = async (page, user) => {
	// todo вынести адрес сервера
	await page.goto('https://realworld.qa.guru/');
	const { email, password, username } = user;

	await page.getByRole('link', { name: 'Sign up' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	//	await page.getByRole('textbox', { name: 'Your Name' }).fill(randomUser.username);
	await page.getByRole('textbox', { name: 'Your Name' }).fill(username);

	await page.getByRole('textbox', { name: 'Email' }).click();
	await page.getByRole('textbox', { name: 'Email' }).fill(email);
	await page.getByRole('textbox', { name: 'Password' }).click();
	await page.getByRole('textbox', { name: 'Password' }).fill(password);
	await page.getByRole('button', { name: 'Sign up' }).click();
};

const getRandomUser = () => {
	const people = {
		email: faker.internet.email(),
		password: faker.internet.password(),
		username: faker.internet.username(),
	};

	return people;
};

test('Авторизованный пользователь может просмотреть список статей', async ({
	page,
}) => {
	// Act
	const randomUser = getRandomUser();

	await register(page, randomUser);

	await page.screenshot({ path: 'screenshot1.png' });
	await expect(page.getByRole('navigation')).toContainText(randomUser.username);
});

test('Демонстрация работы filter', async ({ page }) => {
	await page.goto('https://realworld.qa.guru/');
	await page.waitForLoadState('networkidle');
	const filteredArticles = await page
		.locator('.article-preview')
		.filter({
			hasText: 'Gustave', // ищет текст в любом месте элемента или его потомков
		})
		.click();
	//await expect(page.getByRole("navigation")).toContainText(username);
	//	await page.screenshot({ path: 'screenshot1.png' });
});
