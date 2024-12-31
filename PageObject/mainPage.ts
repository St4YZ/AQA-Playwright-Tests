import { Page } from '@playwright/test';

export class MainPage {
  readonly netlifyBaseURL: string = 'https://qa-practice.netlify.app'
  readonly letCode: string = 'https://letcode.in'
  readonly magentoMainPage: string = 'https://magento.softwaretestingboard.com/'
  
  constructor(readonly page: Page) {
    this.page = page;
  }
  async gotoRegisterPage() {
    await this.page.goto(this.netlifyBaseURL + '/register')
  }
  async gotoIFramePage() {
    await this.page.goto(this.netlifyBaseURL + '/iframe')
  }
  async gotoCheckBoxPage() {
    await this.page.goto(this.netlifyBaseURL + '/checkboxes')
  }
  async gotoLetCodeTables() {
    await this.page.goto(this.letCode + '/table')
  }
  async gotoMagentoMainPage() {
    await this.page.goto(this.magentoMainPage)
  }

}