// import 'dotenv/config';
import dotenv from 'dotenv';
import { defineConfig } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const environment = process.env.TEST_ENV || 'qa';

dotenv.config({
    path: `.env.${environment}`, //tells dotenv which environment file to read.
});

const testDir = defineBddConfig({
    features: 'features/*.feature',
    steps: ['stepsDefination/*.ts', 'hooks/*.ts', 'fixtures/*.ts'],
});

export default defineConfig({
    workers: 1,
    retries: 2,
    testDir,
    use: {
        // baseURL: 'https://crm.devbrokerlos.com/',
        baseURL: process.env.BASE_URL || 'https://crm.devbrokerlos.com/',

        headless: false,
        video: "retain-on-failure",
        trace: "retain-on-failure",

    },
    reporter: [
        ['html', { open: 'never' }],

        cucumberReporter('html', {
            outputFile: 'cucumber-report/index.html',
        }),
    ],
}); 