import Header from '../header/header.js';
import Page from './page.js';
import { expect } from 'chai';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
	/**
	 * Instantiate header only in the pages you need it
	 * Stops misuse and confusion when e.g. two services on the page, two search boxes etc.
	 */
	public header = new Header();

	private get logIn() {
		return $('//span[@class="ii-1r0s0ly" and text()="Log in"]');
	}

	private get chooseAnAccount() {
		return $('//span[@title="Choose an account"]');
	}

	public async assertOnHomePage() {
		let visibleAndEnabled: Promise<boolean> = this.logIn.isClickable();
		expect(visibleAndEnabled).to.be.true;
		visibleAndEnabled = this.chooseAnAccount.isClickable();
		expect(visibleAndEnabled).to.be.true;
	}

	/**
	 * Utilises the extends Page to allow navigation to sub page without having to call baseURL
	 */
	public open() {
		return super.open('/');
	}
}

export default new HomePage();
