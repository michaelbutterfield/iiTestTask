import Services from '../../application/dropdown/services.dropdown.js';

export default class Header {
	services: Services;

	private get servicesDropdown() {
		return $("//span[@title='Services']");
	}

	constructor() {
		this.services = new Services();
	}

	public async clickServices() {
		await this.servicesDropdown.click();
	}
}
