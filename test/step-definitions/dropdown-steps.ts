import { When, Then } from '@wdio/cucumber-framework';
import HomePage from '../../application/pages/home.page.js';
import { expect } from 'chai';

const pages = {
	homePage: HomePage,
};

When('I click on the services tab', () => {
	pages.homePage.header.clickServices();
});

When(/^I click on the (.*) link$/, (linkToClick: String) => {
	pages.homePage.header.services.clickServicesLink(linkToClick);
});

Then(
	/^I will be on the correct page with the correct (.*)$/,
	(expectedUrl: String) => {
		expect(driver.getUrl()).to.be.equal(expectedUrl);
	}
);
