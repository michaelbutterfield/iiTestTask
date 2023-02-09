import { Given } from '@wdio/cucumber-framework';
import HomePage from '../../application/pages/home.page.js';

const pages = {
	homePage: HomePage,
};

Given('I am on the Interactive Investor home page', async () => {
	await driver.url('/');
	pages.homePage.assertOnHomePage();
});
