import { test as baseTest } from '@playwright/test';
import { ActionElements } from '../PageObject/e-commerce/commerceElements';
import { MainPage } from '../PageObject/mainPage';

const test = baseTest.extend<{
    ecommerceActions: ActionElements
    mainPage: MainPage
}>({
    ecommerceActions: async ({page}, use) => {
        const ecommerceActions = new ActionElements(page);
        await use(ecommerceActions);
    },
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
});

export { test }
export { expect } from '@playwright/test'