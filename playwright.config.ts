/*import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './scripts',
  

  timeout: 60 * 1000,

  expect: {

    timeout: 5000
  },

  //forbidOnly: !!process.env.CI,

  retries: 1,

  workers: 15,
  

  reporter:[['html', { outputFolder: 'my-report' }]],
  // reporter: [['junit', {outputFile: 'report/target/surefire-reports/report-endToend-util-mashup-ui-test.junit.xml'}],['html']],
  
  use: {
   
   actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        screenshot: 'only-on-failure',
      },
    },
  ],
};

export default config;*/



import { PlaywrightTestConfig } from '@playwright/test';



const config: PlaywrightTestConfig = {




    timeout: 60 * 1000,



    expect:



    {



        timeout: 5000,



    },





  use: {



//    viewport: { width: 1920, height: 1080 },



  //  baseURL: 'https://google.com/',





    browserName: 'chromium',



//  browserName: 'firefox',





    screenshot: 'only-on-failure',



    headless: false,





  },




  reporter:[['html', { outputFolder: 'my-report' }]],



//  reporter: [ ['junit', { outputFile: 'reports.xml' }] ],



};



export default config;