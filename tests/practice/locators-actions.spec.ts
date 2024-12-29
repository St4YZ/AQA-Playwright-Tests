import { test, expect } from '@playwright/test';
import { MainPage } from '../../PageObject/mainPage';
import { ActionElements } from '../../PageObject/webElements';

test('Register page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page)
    await mainPage.gotoRegisterPage()

    await actionElements.fillFirstNameField()
    await actionElements.fillLastNameField()
    await actionElements.fillPhoneNumberField()
    await actionElements.selectCountryDropdownOption()
    await actionElements.fillEmailAddressField()
    await actionElements.fillPasswordField()
    await actionElements.selectCheckboxOption()
    await actionElements.clickRegisterButton()

    await expect(actionElements.alertDialog).toBeVisible()
});

test('IFrame page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page)
    await mainPage.gotoIFramePage()

    await actionElements.clickAtIFrameLearnMoreButton()
    await expect(actionElements.iFrameAlertLocator).toBeVisible()
});

test('Checkbox page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page)
    await mainPage.gotoCheckBoxPage()

    await actionElements.checkAllCheckBoxes()
    await actionElements.allCheckBoxesAreChecked()
});

test('Letcode tables Task', async ({ page }) => {
    const mainPage = new MainPage(page);
    const actionElements = new ActionElements(page)
    await mainPage.gotoLetCodeTables()

    expect(await actionElements.parsedPrice()).toEqual(await actionElements.countedPrice())
});

