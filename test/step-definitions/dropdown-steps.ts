import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import HomePage from '../../application/pages/home.page.js';

const pages = {
	homePage: HomePage,
};

When(/^I click on the services tab$/, async () => {
	await pages.homePage.header.clickServices();
});

When(/^I click on the (.*) link$/, async (linkToClick: String) => {});

Then(/^I should see a flash message saying (.*)$/, async (message) => {});
