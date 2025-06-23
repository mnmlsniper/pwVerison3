import { test, expect } from '@playwright/test';

test('Визуальная регрессия', async ({ page }) => {
	await page.goto('https://realworld.qa.guru/');
	await expect(page.locator('.navbar-brand')).toBeVisible();
	await expect(page).toHaveScreenshot('realworldHome.png', {
		mask: [page.locator('.date'), page.locator('.counter')], // Замаскировать динамический контент ( даты и каунтеры)
		fullPage: true,
		animations: 'disabled',
		threshold: 0.1,
	});
	const pageContent = await page.locator('body').innerText();
	expect(pageContent).toMatchSnapshot('realworldHome.txt');
});

test('Как не надо делать', async ({ page }) => {
	await page.goto('https://realworld.qa.guru/');
	await page.getByRole('link', { name: 'Sign up' }).click();
	const $emailInput = await page.getByRole('textbox', { name: 'Email' });
	$emailInput.focus();
	await expect($emailInput).toHaveScreenshot();
	$emailInput.fill('How do you do?');
	await expect($emailInput).toHaveScreenshot();
});
test('Визуальная регрессия c моками', async ({ page }) => {
	await page.route('**/tags', async (route) => {
		// todo
		const json = {
			tags: [
				'понедельник',
				'пятничка',
				'Константиновский Константин Константинович',
			],
		};
		await route.fulfill({ json });
	});
	await page.goto('https://realworld.qa.guru/');
	await expect(page.locator('.navbar-brand')).toBeVisible();
	await expect(page).toHaveScreenshot();
});
test.only('Визуальная регрессия c модификацией запроса', async ({ page }) => {
	await page.route('**/tags', async (route) => {
		const response = await route.fetch();
		const json = await response.json();
		// добавляем к списку тегов еще один
		json.tags.unshift('пятничка+');
		await route.fulfill({ json });
	});
	await page.goto('https://realworld.qa.guru/');
	await expect(page.locator('.navbar-brand')).toBeVisible();
	await expect(page).toHaveScreenshot();
});
