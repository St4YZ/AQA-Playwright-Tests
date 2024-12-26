import { test, expect } from '@playwright/test';
import { MainPage } from '../../PageObject/mainPage';
import { ActionElements } from '../../PageObject/webElements';

test('Locators page', async ({ page }) => {
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