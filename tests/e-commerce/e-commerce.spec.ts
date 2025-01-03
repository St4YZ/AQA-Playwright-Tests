import { test, expect } from '@playwright/test';
import { MainPage } from '../../PageObject/mainPage';
import { ActionElements } from '../../PageObject/e-commerce/commerceElements';

test('Magento e-commerce first task', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page);
    await mainPage.gotoMagentoMainPage()
    await actionElements.selectProductAndAddItToCart()
    await expect(actionElements.successAlertMessage).toBeVisible()
    await actionElements.clickAtMyCardandProceedToCheckoutButtons()
    await actionElements.fillAllFieldsToBuyProduct()
    await actionElements.acceptOrder()
    await expect(actionElements.successOrderMessage).toHaveText('Thank you for your purchase!')
});

test('Magento e-commerce second task', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page);
    await mainPage.gotoMagentoMainPage()
    await actionElements.selectFirstProductAndAddItToComparison()
    await actionElements.selectSecondProductAndGotoComparisonPage()
    await actionElements.clickAtLowestPriceProductItem()
    await actionElements.addItemToCart()
    await expect(actionElements.successAlertMessage).toBeVisible()
    await actionElements.clickAtMyCartLinkAndProceedToCheckoutButton()
    await actionElements.fillAllFieldsToBuyProduct()
    await actionElements.acceptOrder()
    await expect(actionElements.successOrderMessage).toHaveText('Thank you for your purchase!')
});