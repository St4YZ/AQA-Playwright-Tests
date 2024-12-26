import { Page } from '@playwright/test';

export class MainPage {
  readonly netlifyBaseURL: string = 'https://qa-practice.netlify.app'
  
  constructor(readonly page: Page) {
    this.page = page;
  }
  async gotoRegisterPage() {
    await this.page.goto(this.netlifyBaseURL + '/register')
  }
}