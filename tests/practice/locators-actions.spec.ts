import { test, expect } from '../../fixtures/baseFixture';

test('Register page', async ({ mainPage, actionElements }) => {
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

test('IFrame page', async ({ mainPage, actionElements }) => {
    await mainPage.gotoIFramePage()
    await actionElements.clickAtIFrameLearnMoreButton()
    await expect(actionElements.iFrameAlertLocator).toBeVisible()
});

test('Checkbox page', async ({ mainPage, actionElements }) => {
    await mainPage.gotoCheckBoxPage()
    await actionElements.checkAllCheckBoxes()
    await actionElements.allCheckBoxesAreChecked()
});

test('Letcode assert table sum price is correct Task', async ({ mainPage, actionElements }) => {
    await mainPage.gotoLetCodeTables()
    await actionElements.assertTableData()
});

test('Letcode assert Raj is checked Task', async ({ mainPage, actionElements }) => {
    await mainPage.gotoLetCodeTables()
    await actionElements.checkRajCheckbox()
    await expect(actionElements.rajCheckbox).toBeChecked()
});

test.skip('Letcode assert sorting is working correct Task', async ({ mainPage, actionElements }) => {
    await mainPage.gotoLetCodeTables()
    // not ready
});

