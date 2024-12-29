import { faker } from '@faker-js/faker';
import { Page, Locator, FrameLocator, expect } from '@playwright/test';

class WebElements {
  readonly firstNameField: Locator = this.page.getByRole('textbox', { name: 'First Name' })
  readonly lastNameField: Locator = this.page.getByRole('textbox', { name: 'Last Name' })
  readonly phoneNumberField: Locator = this.page.getByPlaceholder('Phone number')
  readonly countryDropdown: Locator = this.page.getByRole('combobox')
  readonly emailAddressField: Locator = this.page.getByRole('textbox', { name: 'Email' })
  readonly passwordField: Locator = this.page.getByRole('textbox', { name: 'Password' })
  readonly registerCheckBox: Locator = this.page.getByRole('checkbox')
  readonly registerButton: Locator = this.page.getByRole('button', { name: 'Register' })
  readonly alertDialog: Locator = this.page.getByRole('alert')
  readonly iFrameLocator: FrameLocator = this.page.frameLocator('iframe')
  readonly iFrameLearnMoreButtonLocator: Locator = this.iFrameLocator.getByRole('button', { name: 'Learn more' })
  readonly iFrameAlertLocator: Locator = this.iFrameLocator.locator('#show-text')
  readonly checkBoxes: Locator = this.page.getByRole('checkbox')
  readonly resultPrice: Locator = this.page.locator('tfoot td b')
  readonly allPrices: Locator = this.page.locator('#shopping tbody tr td:nth-child(2)')
  constructor(readonly page: Page) {
  }
}

export class ActionElements extends WebElements {
  constructor(page: Page) {
    super(page);
  }

  async fillFirstNameField() {
    await this.firstNameField.fill(faker.person.firstName())
  }
  async fillLastNameField() {
    await this.lastNameField.fill(faker.person.lastName())
  }
  async fillPhoneNumberField() {
    await this.phoneNumberField.fill(faker.phone.number())
  }
  async selectCountryDropdownOption() {
    await this.countryDropdown.selectOption(faker.location.country())
  }
  async fillEmailAddressField() {
    await this.emailAddressField.fill(faker.internet.email())
  }
  async fillPasswordField() {
    await this.passwordField.fill(faker.internet.password())
  }
  async selectCheckboxOption() {
    await this.registerCheckBox.check()
  }
  async clickRegisterButton() {
    await this.registerButton.click()
  }
  async clickAtIFrameLearnMoreButton() {
    await this.iFrameLearnMoreButtonLocator.click()
  }
  async checkAllCheckBoxes() {
    for (const checkBox of await this.checkBoxes.all()) {
      await checkBox.check()
    }
  }
  async allCheckBoxesAreChecked() {
    for (const checkBox of await this.checkBoxes.all()) {
      await expect(checkBox).toBeChecked()
    }
  }
  async parsedPrice() {
    return parseInt(await this.resultPrice.innerText())
  }
  async countedPrice() {
    let countedPrice: number  = 0
    for(let price of await this.allPrices.allInnerTexts()){
        countedPrice = countedPrice + parseInt(price)
    }
    return countedPrice
  }
}