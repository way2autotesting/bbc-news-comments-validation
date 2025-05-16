// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig({
  const config = ({
  testDir: './tests',
  timeout: 100 *1000,//override existing timeout for every steps i.e 40 ms or 40000
  expect:{//timeout for assertion level validation 
    timeout: 5000,
  },

  reporter : 'html',
  use: {

    browserName : 'chromium',
    // browserName : 'firefox'
    // browserName : 'webkit'//safari

    headless : false,  //browser on/off
    screenshot : 'on',
    //trace : 'on'
    trace : 'retain-on-failure'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  },

});
module.exports = config // available in the project
//npx playwright test -> run test
//npx playwright show-report ->report
