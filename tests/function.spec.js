import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

/* Объявление переменной let dog;
Присвоение переменной dog = 'Belka';

 Объявление и присвоение переменных let dogSecond = 'Strelka';

 let day = '11april';
 day = '12 april';

 блочная область видимости {} */

// const SALARY=1; SALARY = 2; const PI = 3.14151926539;

/*
Примитивы
1) number - числа, infinity nan
let num = 42;
let pi = 3.14;

2) string - строки
let name = 'Alice';
let nameSecond = "Alice"
let nameThird = `Alice`
let fives = `1+${nameThird}`

3) boolean - логические значение
let isTrue = true
let is LifePain = false

4) null - специальное обозначение ничего
let empty=null;

5) undefined - значение по умолчанию для неинициализированных переменных
let x;
console.log(x);

6) symbol - уникальных идентификаторов
let id = Symbol('id');

7) bigint - целые числа произвольной длинны
let bigNum = 1234567891234567890n;


Объекты - коллекция свойств ( массивы, функции, даты)

*/

async function registerRandomUser(page, name, email, password) {
	await page.goto('https://realworld.qa.guru/');
	await page.getByRole('link', { name: 'Sign up' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	await page
		.getByRole('textbox', { name: 'Your Name' })
		.fill(faker.internet.username());
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page
		.getByRole('textbox', { name: 'Email' })
		.fill(faker.internet.email());
	await page.getByRole('textbox', { name: 'Password' }).click();
	await page
		.getByRole('textbox', { name: 'Password' })
		.fill(faker.internet.password());
	await page.getByRole('button', { name: 'Sign up' }).click();
}
/* шаг 1
const registerRandomUserVerison2 = async function registerRandomUser(page, name, email, password) {
	await page.goto('https://realworld.qa.guru/');
	await page.getByRole('link', { name: 'Sign up' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page.getByRole('textbox', { name: 'Email' }).fill(email);
	await page.getByRole('textbox', { name: 'Password' }).click();
	await page.getByRole('textbox', { name: 'Password' }).fill(password);
	await page.getByRole('button', { name: 'Sign up' }).click();
};

шаг 2
const registerRandomUserVerison2 = async (page, name, email, password) => {
	await page.goto('https://realworld.qa.guru/');
	await page.getByRole('link', { name: 'Sign up' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page.getByRole('textbox', { name: 'Email' }).fill(email);
	await page.getByRole('textbox', { name: 'Password' }).click();
	await page.getByRole('textbox', { name: 'Password' }).fill(password);
	await page.getByRole('button', { name: 'Sign up' }).click();
}; 

// Стрелочная функция const greet = (name) => `Hello, ${name}!`;
// IIFE 

(function(){
console.log('запуск сразу после обьявления')
})

*/

const registerRandomUserVerison2 = async (page) => {
	const username = faker.internet.username();

	await page.goto('https://realworld.qa.guru/');
	await page.getByRole('link', { name: 'Sign up' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page
		.getByRole('textbox', { name: 'Email' })
		.fill(faker.internet.email());
	await page.getByRole('textbox', { name: 'Password' }).click();
	await page
		.getByRole('textbox', { name: 'Password' })
		.fill(faker.internet.password());
	await page.getByRole('button', { name: 'Sign up' }).click();

	return username;
};

test('Авторизованный пользователь может просмотреть список статей', async ({
	page,
}) => {
	const username = await registerRandomUserVerison2(page);

	await expect(page.getByRole('navigation')).toContainText(username);

	// доделать просмотр статей
});

test(' Пользователь может зарегистрироваться с логином и паролем', async ({
	page,
}) => {
	const username = await registerRandomUserVerison2(page);
	// await page.screenshot({ path: 'screenshot.png' });

	await expect(page.getByRole('navigation')).toContainText(username);
	//await page.screenshot({ path: 'screenshot1.png' });
});
