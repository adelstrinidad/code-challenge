/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  /**
  * Opens a sub page of the page
  * @param {String }path path of the sub page (e.g. /path/to/page.html)
  * @return {Promise}
  */
  open(path) {
    return path ? browser.url(`/${path}`) : browser.url('/');
  }
  /**
     *
     */
  waitForPageLoaded() {
    browser.waitUntil(function() {
      const state = browser.execute(function() {
        return document.readyState;
      });
      return state === 'complete';
    },
    {
      timeout: 10000,
      timeoutMsg: 'Check your internet connection',
    });
  }
  /**
   *
   */
  scrollToDown() {
    browser.execute(function(elSelector) {
      window.scrollBy(0, 5000);
    });
  }
}

