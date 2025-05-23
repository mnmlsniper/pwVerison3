import { MainPage } from './index';

export class App {
	constructor(page) {
		this.page = page;
		this.main = new MainPage(page);
		/* Иногда можно сделать вот так
		this.mainMain = new MainMenu(page); */
	}
}
