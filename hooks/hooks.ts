import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pageFixtures';

const { After } = createBdd(test); // Here, we are calling createBdd() and extracting the After hook from it.

After(async ({ page, $testInfo }) => {
    if ($testInfo.status !== $testInfo.expectedStatus) {
        await page.screenshot({
            path: $testInfo.outputPath('failure.png'),
            fullPage: true,
        });
    }
});


