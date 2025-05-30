import { test } from '@playwright/test';
const URL = 'https://apichallenges.herokuapp.com/';

export class ChallengerService {
	constructor(request) {
		this.request = request;
	}
	async post() {
		return test.step('post /challenger', async () => {
			const response = await this.request.post(`${URL}challenger`);
			return response;
		});
	}
}
