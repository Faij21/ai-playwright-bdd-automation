# Playwright BDD Automation Framework

## 1. Project Overview

This project is an end-to-end test automation framework built using Playwright, TypeScript and Cucumber-style BDD with playwright-bdd.

It follows the Page Object Model (POM) design pattern and supports reusable fixtures, environment-based configuration and automated test reporting.

## 2. Technology Stack

- Playwright
- TypeScript
- playwright-bdd
- Node.js
- dotenv
- Cucumber Gherkin

## 3. Project Structure

- `features/` – Gherkin feature files.
- `steps/` – Step definitions.
- `pages/` – Page Object Model classes.
- `fixtures/` – Custom Playwright fixtures.
- `hooks/` – Before and After hooks.
- `test-data/` – JSON test data.
- `tests/` – Setup tests.
- `playwright.config.ts` – Playwright configuration.
- `tsconfig.json` – TypeScript configuration.

## 4. Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install Playwright browsers if required:

```bash
npx playwright install
```

## 5. Environment Configuration

Create the required environment files, such as `.env.qa` and `.env.dev`.

Configure the application URL and test credentials in the appropriate local environment file.

Do not commit environment files containing secrets.

## 6. Execute Tests

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npm test -- --grep "@smoke"
```

Run regression tests:

```bash
npm test -- --grep "@regression"
```

Select the QA environment in PowerShell:

```powershell
$env:TEST_ENV="qa"; npm test
```

## 7. Test Reports

Open the Playwright HTML report:

```bash
npx playwright show-report
```

The Cucumber HTML report is generated at the configured output location.

## 8. Debugging

The framework can capture screenshots, videos and traces according to the Playwright configuration.

Open a trace:

```bash
npx playwright show-trace path/to/trace.zip
```

## 9. Design Patterns

- Page Object Model
- Custom Fixtures
- BDD with Gherkin
- Reusable Hooks
- Environment-based Configuration
- Separation of Test Data and Test Logic