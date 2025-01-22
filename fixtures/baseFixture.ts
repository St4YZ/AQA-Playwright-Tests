import { test as baseTest } from '@playwright/test';
import { MainPage } from '../PageObject/mainPage';
import { ActionElements } from '../PageObject/webElements';

const test = baseTest.extend<{
    mainPage: MainPage
    actionElements: ActionElements
}>({
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
    actionElements: async ({page}, use) => {
        const actionElements = new ActionElements(page);
        await use(actionElements);
    }
});

export { test }
export { expect } from '@playwright/test'