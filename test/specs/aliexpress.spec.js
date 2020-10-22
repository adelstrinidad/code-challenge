import HomePage from '../pageobjects/home.page';

describe('Aliexpress test suite', () => {
  it('Verify availability for a specific product', () => {
    HomePage.open();
    const searchKey = $('#search-key');
    searchKey.waitForExist({timeout: 5000});
    searchKey.setValue('iphone');
    browser.keys(['Enter']);

    try {
      $('.next-dialog-body').waitForExist({timeout: 2000});
    } catch (e) {
      console.log(e);
    }

    $('.next-dialog-close').click();


    // browser.pause(3000)
    browser.execute(function(elSelector) {
      window.scrollBy(0, 5000);
    });

    browser.waitUntil(
        () => $('.next-pagination-list').isExisting(),
        {
          timeout: 5000,
          timeoutMsg: 'expected text to be different after 5s',
        },
    );

    const nextButtons = $$('.next-pagination-list .next-btn');
    nextButtons[1].click();
    const listItems = $$('.list-item');
    listItems[1].click();
    browser.pause(3000);
    const windowHandle = browser.getWindowHandles();
    browser.switchToWindow(windowHandle[1]);
    browser.pause(3000);
    console.log($('.product-quantity-tip span').getText());
  });
});


