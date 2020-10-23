import HomePage from '../pageobjects/home.page';
import SearchResultPage from '../pageobjects/searchResult.page';
import DetailPage from '../pageobjects/detail.page';

describe('Aliexpress test suite', () => {
  before(() => {
    HomePage.open();
  });

  it('Verify availability for a specific product', () => {
    HomePage.searchItem('iphone');
    SearchResultPage.selectPage(2);
    SearchResultPage.selectItem(2);
    const itemAvailability = DetailPage.getItemAvailability();
    expect(itemAvailability).to.be.greaterThan(0);
  });
});


