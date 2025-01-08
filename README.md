# AQA-Playwright-Tests

to install dependencies
To get started, run the following commands in your terminal:
npm install
npx playwright install

To run tests without UI, use the command:
npm run test:headless

To run tests and open the browser, use the command:
npm run test:headed

To run tests in debug mode, use the command:
npm run test:debug

To run tests with a specific title, use the command:
npx playwright test -g "your id title"

To use eslint:
npx eslint .

To fix eslint issues:
npx eslint --fix
