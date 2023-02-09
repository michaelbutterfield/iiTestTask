import { expect } from 'chai';

/**
 * dropdowns as seperate objects
 * encapsulates functionality and ensures you have to import the dropdown before you can use it
 * secure and reusable
 */
export default class Services {
	private linkListBool: Promise<boolean>;

	public async clickServicesLink(linkToClickText: String) {
		(
			await $(
				`//a[@class='chakra-link chakra-link ii-y41h9l' and text()="${linkToClickText}"]`
			)
		).click();
	}

	private getLinksList(listToGet: String) {
		return $$(
			`//div[@id="navigationItemServices"]//span[text()="${listToGet}"]/../ul[@class="ii-xlij4l"]`
		);
	}

	public async assertAccountsServicesVisibleAndEnabled() {
		const accountsLinks = $$(await this.getLinksList('Accounts'));
		await accountsLinks.forEach(async function (link) {
			this.linkListBool = link.isClickable();
			expect(this.linkListBool).to.be.true;
		});
	}

	public async assertInvestingServicesVisibleAndEnabled() {
		const investingLinks = $$(await this.getLinksList('Investing'));
		await investingLinks.forEach(async function (link) {
			this.linkListBool = link.isClickable();
			expect(this.linkListBool).to.be.true;
		});
	}
}
