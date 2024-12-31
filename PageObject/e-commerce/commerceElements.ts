import { faker } from '@faker-js/faker';
import { Page, Locator } from '@playwright/test';

class WebElements {
    constructor(readonly page: Page) {
        this.page = page;
    }
    readonly menuItem: Locator = this.page.getByRole('menuitem').getByText('Women')
    readonly firstProductItem: Locator = this.page.locator('.product-image-container').first()
    readonly firstSizeOption: Locator = this.page.getByRole('listbox', { name: 'Size' }).getByRole('option').first()
    readonly firstColorOption: Locator = this.page.getByRole('listbox', { name: 'Color' }).getByRole('option').first()
    readonly addToCartButton: Locator = this.page.getByRole('button').getByText('Add to Cart')
    readonly successAlertMessage: Locator = this.page.getByRole('alert')
    readonly myCartLink: Locator = this.page.getByRole('link', { name: 'My cart' })
    readonly proceedToCheckoutButton: Locator = this.page.getByRole('button', { name: 'Proceed to Checkout' })
    readonly emailAddressField: Locator = this.page.getByRole('textbox', { name: 'Email' })
    readonly firstNameField: Locator = this.page.getByRole('textbox', { name: 'First Name' })
    readonly lastNameField: Locator = this.page.getByRole('textbox', { name: 'Last Name' })
    readonly companyField: Locator = this.page.getByRole('textbox', { name: 'Company' })
    readonly countryDropdown: Locator = this.page.getByRole('combobox', { name: 'Country' })
    readonly streetField: Locator = this.page.getByRole('textbox', { name: 'Street' }).first()
    readonly cityField: Locator = this.page.getByRole('textbox', { name: 'City' })
    readonly stateField: Locator = this.page.getByRole('textbox', { name: 'State' })
    readonly zipField: Locator = this.page.getByRole('textbox', { name: 'Zip' })
    readonly phoneNumberField: Locator = this.page.getByRole('textbox', { name: 'Phone Number' })
    readonly radioButton: Locator = this.page.getByRole('radio').first()
    readonly nextButton: Locator = this.page.getByRole('button', { name: 'Next' })
    readonly placeOrderButton: Locator = this.page.getByRole('button', { name: 'Place Order' })
    readonly successOrderMessage: Locator = this.page.locator('.base')
}

export class ActionElements extends WebElements {
    constructor(page: Page) {
        super(page);
    }
    async clickAtMenuItem() {
        await this.menuItem.click()
    }
    async clickAtFirstProductItem() {
        await this.firstProductItem.click()
    }
    async clickAtFirstSizeOption() {
        await this.firstSizeOption.click()
    }
    async clickAtFirstColorOption() {
        await this.firstColorOption.click()
    }
    async clickAtAddToCartButton() {
        await this.addToCartButton.click()
    }
    async selectProductAndAddItToCart() {
        await this.clickAtMenuItem()
        await this.clickAtFirstProductItem()
        await this.clickAtFirstSizeOption()
        await this.clickAtFirstColorOption()
        await this.clickAtAddToCartButton()
    }
    async clickAtMyCartLink() {
        await this.myCartLink.click()
    }
    async clickAtProceedToCheckoutButton() {
        await this.proceedToCheckoutButton.click()
    }
    async clickAtMyCardandProceedToCheckoutButtons() {
        await this.myCartLink.click()
        await this.proceedToCheckoutButton.click()
    }
    async fillEmailField() {
        await this.emailAddressField.fill(faker.internet.email())
    }
    async fillFirstNameField() {
        await this.firstNameField.fill(faker.person.firstName())
    }
    async fillLastNameField() {
        await this.lastNameField.fill(faker.person.lastName())
    }
    async fillCompanyField() {
        await this.companyField.fill(faker.company.name())
    }
    async selectCountryOption() {
        await this.countryDropdown.selectOption('Ukraine')
    }
    async fillStreetField() {
        await this.streetField.fill(faker.location.streetAddress())
    }
    async fillCityField() {
        await this.cityField.fill(faker.location.city())
    }
    async fillStateField() {
        await this.stateField.fill(faker.location.state())
    }
    async fillZipField() {
        await this.zipField.fill(faker.location.zipCode())
    }
    async fillPhoneNumberField() {
        await this.phoneNumberField.fill(faker.phone.number())
    }
    async selectRadioButton() {
        await this.radioButton.check()
    }
    async fillAllFieldsToBuyProduct() {
        await this.fillEmailField()
        await this.fillFirstNameField()
        await this.fillLastNameField()
        await this.selectCountryOption()
        await this.fillCompanyField()
        await this.fillStreetField()
        await this.fillCityField()
        await this.fillStateField()
        await this.fillZipField()
        await this.fillPhoneNumberField()
        await this.selectRadioButton()
    }
    async acceptOrder() {
        await this.nextButton.click()
        await this.placeOrderButton.click()
    }
}