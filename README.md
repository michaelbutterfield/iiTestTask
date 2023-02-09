# How to run:

npm i

npm run wdio

# The thought behind it:

The devs creating their own TDD unit tests is great, it ensures the code works and as long as I ensure the tests actually test then I don't need to write any functionality and duplicate the work. Tests main concern then is the behaviour of the application and the behaviour expected by end users. This influences the **BDD** (Behaviour Driven Development) approach taken.

User story syntax of:

- _As a...,_
- _I want...,_
- _So that..._

translates nicely in to the **Given, When, Then** gherkin syntax steps of the front end Cucumber BDD so the client _(stakeholders)_, the devs and the BA's all follow and understand the functionality being tested.

One of the goals of testing and the frameworks are to combine both the dev's (Code and Application) and BA's (User Stories and Client Feedback) work to create a comprehensive end-to-end automated testing solution.

## Architecture:

The frameworks all follow a **Page Object** design pattern. This ensures the frameworks are loosely coupled and as reusable as possible. The main concept is that everything is an object, every page, every modal, every element. The way the frameworks are set up allows us to store pages, elements, dropdowns etc. to be called and used throughout.

The Page Object model allows us to do this by having a hierarchical object structure. The frameworks have a base application object (usually called Website, Application, DesktopApplication etc.), used to create the pages of that website/application (LogInPage, BasketPage).

Within that Page; Page Object we inherit from an abstract Page class, allowing us to add generic functionality available to every page. In the page class we create the elements we want to interact with on the page (LogIn, Submit, PostcodeField). Had I had more time they would be using the object classes defined in a common project (Button, DropDown, Image etc.)

Once this hierarchical structure is all set up it allows for incredible ease of use, for example:

Website.Page.Element.Action(); - for example:

    await pages.homePage.header.clickServices();

    Website.LoginPage.OrderRefField.SendKeys(orderNumber);
