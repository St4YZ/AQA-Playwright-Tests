import { faker } from '@faker-js/faker';
import { Page, Locator } from '@playwright/test';

class WebElements {
    readonly firstNameField: Locator = this.page.getByRole('textbox', {name: 'First Name'})
    readonly lastNameField: Locator = this.page.getByRole('textbox', {name: 'Last Name'})
    readonly phoneNumberField: Locator = this.page.getByPlaceholder('Phone number')
    readonly countryDropdown: Locator = this.page.getByRole('combobox')
    readonly emailAddressField: Locator = this.page.getByRole('textbox', {name: 'Email'})
    readonly passwordField: Locator = this.page.getByRole('textbox', {name: 'Password'})
    readonly checkbox: Locator = this.page.getByRole('checkbox')
    readonly registerButton: Locator = this.page.getByRole('button', {name: 'Register'})
    readonly alertDialog: Locator = this.page.getByRole('alert')
    constructor(readonly page: Page) {
        this.page = page;
        
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
        await this.checkbox.check()
      }
      async clickRegisterButton() {
        await this.registerButton.click()
      }
}