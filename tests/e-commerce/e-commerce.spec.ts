import { test, expect } from '../../fixtures/e-commerceFixture';

test('Magento e-commerce first task', async ({ mainPage, ecommerceActions }) => {
    await mainPage.gotoMagentoMainPage()
    await ecommerceActions.selectProductAndAddItToCart()
    await expect(ecommerceActions.successAlertMessage).toBeVisible()
    await ecommerceActions.clickAtMyCardandProceedToCheckoutButtons()
    await ecommerceActions.fillAllFieldsToBuyProduct()
    await ecommerceActions.acceptOrder()
    await expect(ecommerceActions.successOrderMessage).toHaveText('Thank you for your purchase!')
});

test('Magento e-commerce second task', async ({ mainPage, ecommerceActions }) => {
    await mainPage.gotoMagentoMainPage()
    await ecommerceActions.selectFirstProductAndAddItToComparison()
    await ecommerceActions.selectSecondProductAndGotoComparisonPage()
    await ecommerceActions.clickAtLowestPriceProductItem()
    await ecommerceActions.addItemToCart()
    await expect(ecommerceActions.successAlertMessage).toBeVisible()
    await ecommerceActions.clickAtMyCartLinkAndProceedToCheckoutButton()
    await ecommerceActions.fillAllFieldsToBuyProduct()
    await ecommerceActions.acceptOrder()
    await expect(ecommerceActions.successOrderMessage).toHaveText('Thank you for your purchase!')
});