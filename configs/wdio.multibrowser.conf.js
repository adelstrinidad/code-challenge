// Load the default configs:
const {config} = require('../wdio.conf');
config.services = ['chromedriver',
  ['selenium-standalone', {
    logPath: 'logs',
    installArgs: {
      drivers: {
        firefox: {version: '0.26.0'},
      },
    },
    args: {
      drivers: {
        firefox: {version: '0.26.0'},
      },
    },
  }],
],
config.capabilities = [
  {
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.
    'maxInstances': 5,
    //
    'browserName': 'chrome',
  },
  {
    'browserName': 'firefox',
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
    // 'specs': [
    //  './test/specs/**/loginUsingCookie.spec.js',
    // ],
    'moz:firefoxOptions': {
      // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
      // args: ['-headless'],
    },
  },
];

exports.config = config;
