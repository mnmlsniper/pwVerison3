import { MainPage, RegisterPage, YourFeedPage } from './index';

export class App {
	constructor(page) {
		this.page = page;
		this.main = new MainPage(page);
		this.register = new RegisterPage(page);
		this.yourFeed = new YourFeedPage(page);
	}
}
