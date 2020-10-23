# Readme

## Feature to Test
As a Customer we want to see if the second ad from the second results page when searching for "Iphone" on www.aliexpress.com has at least 1 item to be bought.

### Index
<!-- gen:toc -->
- [Repo guidelines](#Repo-guidelines)
  * [Installation](#Installation)
  * [Code Style](#code-style)
  * [Running & Writing Tests](#running--writing-tests)
<!-- gen:stop -->

## Repo guidelines
### Technology stack
- JavaScript ES6
- NodeJS
- Webdriverio (latest version)
- Mocha and Jasmine
- Chai
- Allure and Spec for reporting

### Installation
#### Requirements
-   node >= v12.0.0 -  [how to install Node](https://nodejs.org/en/download/)
-   Chrome browser
-   Firefox if you want to run the tests also here

#### Taking the first step

Let's suppose you have  [Node.js](http://nodejs.org/)  at least Node.js v8.11.2 or higher installed. If you don't have Node installed, we recommend installing  [NVM](https://github.com/creationix/nvm)  to assist managing multiple active Node.js versions.

 1. Clone the project from "[https://github.com/adelstrinidad/code-challenge](https://github.com/adelstrinidad/code-challenge)"<br/>
   Open a console and write:<br/>

```bash
git clone https://github.com/adelstrinidad/code-challenge

```
 2.  Then: Install dependencies<br/>
```bash
npm install
```
 
3. Run all tests on chrome. For more information about tests, read [Running & Writing Tests](#running--writing-tests).

```bash
npx wdio
```

4.  That's it! :wink:

### Code Style

- Coding style is fully defined in [.eslintrc](https://github.com/adelstrinidad/code-challenge/blob/master/.eslintrc.json)
- Comments should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.

To run code linter, use:

```bash
npm run lint
```


### Guidelines
Make sure that every method in the project has associated a JSDoc to it. Some benefits of using JSDOC are:

#### Benefits of Types

1.  Early detection of type errors
2.  Better code analysis
3.  Improved IDE support
4.  Promotes dependable refactoring
5.  Improves code readability
6.  Provides useful IntelliSense while coding

For more information about JSDoc please see: [https://jsdoc.app/](https://jsdoc.app/)
  

### Running & Writing Tests

- Tests should be *hermetic*. Tests should not depend on external services.
- Tests should work on all three platforms: Mac, Linux and Win. This is especially important for screenshot tests.

The tests are located in [`test/specs/*.js`](https://github.com/adelstrinidad/code-challenge/tree/master/test/specs)

- To run all tests:

In order to execute one or more that one suites instead of all of them, you have 3 ways to do that:

1. Adding `--spec name_of_suite_to_execute` flag after npx wdio 

```bash
npx wdio --spec charts-validations
// It will execute all of tests that charts-validations.js file contains
```
2. Adding `--spec part_of_file_name` flag after npx wdio 

```bash
npx wdio --spec aliexpress
// In case there are more than one file that start with "aliexpress", it will execute all of them
```

- To disable a specific test, substitute the `it` with `xit` (mnemonic rule: '*cross it*'):

```js
...
// Using "xit" to skip specific test
xit('should work', async ({server, page}) => {
  const response = await page.goto(server.EMPTY_PAGE);
  expect(response.ok).toBe(true);
});
```

- To run tests in headless mode:

```bash
HEADLESS=true npx wdio
```
Or creating an ".env" file and adding the flag there. Remember this file should be ignored in gitignore file

- Running multibrowser
Run:
```bash
npm run test-multibrowser
``` 

### Reporters

WebdriverIO uses several different types of test reporters to communicate the results of the tests' executions.<br/>
The reports to be used are specified on the `Test Configurations` section of the `wdio.conf.js` file as follows:
```

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }],
  ],

```


##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports. It is an HTML generated website with all the necessary information to debug your test results and take a look at error screenshots. Allure is added to the reporters array in config file, as well as the output directory of the Allure reports. Please note, this has already been added in the `wdio.config.js` file.



To generate and view an allure report locally,
```
 run npm run report
 ```
 
 A typical Allure report will look like this:


![Screenshot](https://github.com/allure-framework/allure2/blob/master/.github/readme-img.png?raw=true)



Allure has several other reporting tools optimized for the CI server of your choice. You can [view the documentation here](https://docs.qameta.io/allure/#_reporting).
