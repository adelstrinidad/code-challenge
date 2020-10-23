import Page from './page';

/**
 * sub page containing specific selectors and methods for Search Result Page
 */
class SearchResultPage extends Page {
  /**
   * define selectors using getter methods
   */
  /**
   * @return {WebdriverIOElement}  paginationBar
   */
  get paginationBar() {return $('.next-pagination-list');}
  /**
   * @return {WebdriverIOElement}  paginationBarList
   */
  get paginationBarList() {return $$('.next-pagination-list .next-btn');}
  /**
   * @return {WebdriverIOElement}  items
   */
  get items() {return $$('.list-item');}
  /**
   * @return {WebdriverIOElement}  nextDialog
   */
  get nextDialog() {return $('.next-dialog-body');}
  /**
   * @return {WebdriverIOElement}  closeNextDialog
   */
  get closeNextDialog() {return $('.next-dialog-close');}

  /**
   *
   * @param {String} item the name of the item for searching
   */
  closeDialog() {
    try {
      this.nextDialog.waitForExist({timeout: 4000});
      this.closeNextDialog.click();
    } catch (e) {
      console.log('there is no cuppon to display');
    }

    // this.closeNextDialog.click();
  }
  /**
   *
   * @param {Integer} page page number
   */
  selectPage(page) {
    this.closeDialog();
    super.scrollToDown();
    browser.waitUntil(
        () => this.paginationBar.isExisting(),
        {
          timeout: 5000,
          timeoutMsg: 'expected text to be different after 5s',
        },
    );
    this.paginationBarList[page - 1].click();
  }
  /**
 *
 * @param {Integer} itemPosition the position of the item to select
 */
  selectItem(itemPosition) {
    super.waitForPageLoaded();
    const item = this.items[itemPosition - 1];
    item.waitForClickable({timeout: 5000});
    item.click();
  }
}

export default new SearchResultPage();
