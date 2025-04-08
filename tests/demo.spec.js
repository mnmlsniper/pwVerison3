import { test, expect } from '@playwright/test';

test('Поиск элемента по типу', async ({ page }) => {
	await page.goto('file:///Users/sniper/pwVerison3/demo.html');
	await page.getByRole('textbox', { name: 'Email' }).fill('dlove@ya1.ru');
	await page.getByRole('textbox', { name: 'Пароль' }).fill('q12345');
	await page.getByRole('button', { name: 'Войти' }).click();
});
test('Поиск элемента по классу', async ({ page }) => {
	await page.goto('file:///Users/sniper/pwVerison3/demo.html');
	await page.locator('.el-input__inner').first().fill('dlove@ya1.ru');
	await page
		.locator('.el-form-item:nth-child(2) .el-input__inner')
		.fill('q12345');
	await page.locator('.el-button').click();
});

test('Поиск элемента по ID', async ({ page }) => {
	await page.goto('file:///Users/sniper/pwVerison3/demo.html');
	await page.locator('#email').fill('dlove@ya1.ru');
	await page.locator('#password').fill('q12345');
	await page.getByRole('button', { name: 'Войти' }).click();
});

test('test form', async ({ page }) => {
	await page.goto('https://demoqa.com/automation-practice-form');
	await page.locator('#fixedban div').nth(1).click();
	await page.locator('body').press('ControlOrMeta+-');
	await page.getByRole('textbox', { name: 'First Name' }).click();
	await page.getByRole('textbox', { name: 'First Name' }).fill('Sniper');
	await page.getByRole('textbox', { name: 'Last Name' }).click();
	await page.getByRole('textbox', { name: 'Last Name' }).fill('Night');
	await page.getByRole('textbox', { name: 'name@example.com' }).click();
	await page
		.getByRole('textbox', { name: 'name@example.com' })
		.fill('sniper@ya.ru');
	await page.getByText('Female').click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).fill('+791698120');
	await page.getByRole('textbox', { name: 'Mobile Number' }).click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
	await page
		.getByRole('textbox', { name: 'Mobile Number' })
		.press('ArrowRight');
	await page.getByRole('textbox', { name: 'Mobile Number' }).fill('91698120');
	await page.getByRole('textbox', { name: 'Mobile Number' }).click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9169812023');
	await page.locator('#dateOfBirthInput').click();
	await page
		.locator('div')
		.filter({
			hasText:
				/^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/,
		})
		.getByRole('combobox')
		.selectOption('7');
	await page
		.getByRole('option', { name: 'Choose Tuesday, August 19th,' })
		.click();
	await page.locator('#dateOfBirthInput').click();
	await page.getByRole('banner').click();
	await page.locator('div:nth-child(2) > div > .avatar > svg').click();
	await page.getByRole('listitem').click();
	await page.getByRole('textbox', { name: 'First Name' }).click();
	await page.getByRole('textbox', { name: 'First Name' }).fill('SNip');
	await page.getByRole('textbox', { name: 'Last Name' }).click();
	await page.getByRole('textbox', { name: 'Last Name' }).fill('night');
	await page
		.locator('div')
		.filter({ hasText: /^Female$/ })
		.click();
	await page.getByRole('textbox', { name: 'name@example.com' }).click();
	await page
		.getByRole('textbox', { name: 'name@example.com' })
		.fill('sni@qa.mba');
	await page.getByRole('textbox', { name: 'Mobile Number' }).click();
	await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9999812023');
	await page.locator('#dateOfBirthInput').click();
	await page
		.locator('div')
		.filter({
			hasText:
				/^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/,
		})
		.getByRole('combobox')
		.selectOption('7');
	await page
		.getByRole('option', { name: 'Choose Tuesday, August 19th,' })
		.click();
	await page.locator('.subjects-auto-complete__value-container').click();
	await page.locator('#subjectsInput').fill('some theme');
	await page.getByText('Music').click();
	await page.getByRole('textbox', { name: 'Current Address' }).click();
	await page
		.getByRole('textbox', { name: 'Current Address' })
		.fill('my adress');
	await page.getByRole('button', { name: 'Submit' }).click();
	await expect(page.getByRole('cell', { name: 'Values' })).toBeVisible();
	await page.locator('#fixedban div').nth(1).click();
	await page.locator('body').press('ControlOrMeta+-');
	await page.locator('body').press('ControlOrMeta+-');
	await page.locator('body').press('ControlOrMeta+-');
	await expect(page.locator('tbody')).toContainText('sni@qa.mba');
	await page.getByRole('cell', { name: 'SNip night' }).click();
	await page.getByRole('cell', { name: 'Values' }).click();
});
