import Page from './page';

/**
 * sub page containing specific selectors and methods for HomePage
 */
class HomePage extends Page {
  /**
   * @return {WebdriverIOElement}  searchKeyBox
   */
  get searchKeyBox() {return $('#search-key');}

  /**
   *
   * @param {String} item the name of the item for searching
   */
  searchItem(item) {
    this.searchKeyBox.waitForExist({timeout: 5000});
    this.searchKeyBox.setValue(item);
    browser.keys(['Enter']);
  }
}

export default new HomePage();
