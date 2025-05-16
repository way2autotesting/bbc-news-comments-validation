# BBC News Test Automation

This project contains automated and manual test cases for validating BBC News headlines and comments section.

## 📁 Project Structure

- `tests/UIBBC.spec.js`: Contains Playwright test scripts for .js.
- `tests/UIBBC.spec.ts`: Contains Playwright test scripts for .ts.
- `pages/pageObjects`: Page Object Models (POM) for each page in .js.
- `pages/pageObjects_ts`: Page Object Models (POM) for each page in .ts.
- `README.md`: Project documentation.
- `package.json`: Project dependencies and scripts.

## ▶️ How to Run the Tests
- `npx playwright test tests`: To run all tests in the tests folder
- `npx playwright test tests/UIBBC.spec.js`: To run a specific test file, like UIBBC.spec.js
- `npx playwright test tests/UIBBC.spec.ts`: To run a specific test file, like UIBBC.spec.ts
- `npx playwright test --ui`: This opens an interactive test runner where you can see and click tests:
- `npx playwright show-report`: To view the detailed HTML report:

### 1. Install Dependencies

```bash
npm install
npm install --save-dev typescript

