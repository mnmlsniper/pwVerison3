import { test, expect } from '@playwright/test';
// pw config
const URL = 'https://apichallenges.herokuapp.com/';
let token;
test.describe('Challenge', () => {
	test.beforeAll(async ({ request }) => {
		const response = await request.post(`${URL}challenger`);
		const headers = await response.headers();
		token = headers['x-challenger'];
		//
		console.log(`${URL}/gui/challenges/${token}`);
	});
	test.only('Получить список челленджей', async ({ request }) => {
		const response = await request.get(`${URL}challenges`, {
			headers: {
				'x-challenger': token,
			},
		});
		expect(response.status()).toBe(200);
		const body = await response.json();
		expect(body.challenges.length).toBe(59);
	});
});
