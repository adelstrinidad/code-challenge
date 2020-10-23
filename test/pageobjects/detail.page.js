import Page from './page';

/**
 * sub page containing specific selectors and methods for a DetailPage page
 */
class DetailPage extends Page {
  /**
   * @return {WebdriverIOElement}  itemAvailability
   */
  get itemAvailability() {return $('.product-quantity-tip span');}


  /**
   *
   * @return {Integer} itemQuantity
   */
  getItemAvailability() {
    browser.pause(3000);
    const windowHandle = browser.getWindowHandles();
    browser.switchToWindow(windowHandle[1]);
    browser.pause(3000);
    const availability = this.itemAvailability.getText();
    const quantity = availability.split(' ');
    return parseInt(quantity[0]);
  }
}

export default new DetailPage();
