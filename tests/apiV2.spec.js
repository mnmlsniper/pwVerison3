import { test, expect } from '@playwright/test';
import { Api } from '../src/services/api.service';

let token;
test.describe.only('Это тесты api', () => {
	test.beforeAll(async ({ request }) => {
		const api = new Api(request);
		const response = await api.challenger.post();

		const headers = await response.headers();
		token = headers['x-challenger'];
		console.log(`${URL}/gui/challenges/${token}`);
	});

	test('Получить список челленджей', async ({ request }) => {
		// передать	token
		const api = new Api(request);
		// todo авторизация
		const response = await api.challenges.get(token);

		expect(response.status()).toBe(200);
		const body = await response.json();
		expect(body.challenges.length).toBe(59);
	});
});
