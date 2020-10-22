import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
     * define selectors using getter methods
     */
  get searchKeyBox() {return $('#search-key');}


  /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  searchItem(item) {
    // add method
  }
}

export default new HomePage();
