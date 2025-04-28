export class YourFeedPage {
	constructor(page) {
		this.page = page;
		//todo нейминг нередактируемых текстовых полей
		this.profileNameField = page.getByRole('navigation');
	}
}
