import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import HomePage from '../../application/pages/home.page.js';

const pages = {
	homePage: HomePage,
};

Given(/^I am on the Interactive Investor home page$/, async (page) => {
	await pages[page].open();
	pages.homePage.assertOnHomePage();
});
