const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {
        test.beforeAll(async ( {browser} ) => {
          const context = await browser.newContext();
          await context.grantPermissions(['geolocation'], { origin: 'https://ns-staging.cxm-salescloud.com/auth/login' });
          page = await context.newPage();
          page.setViewportSize({ width: 1250, height: 600 });
          await utils.mashuplogin(page, "user.na", "North$tar1");
          await page.waitForTimeout(10000);
        });

      
        test.afterAll(async ({browser} ) => {
          await browser.close();
        });

        test('clickonuser',async ({ }) =>{
            await utils.userProfile(page,"Depersonalization Logs");
            await page.waitForTimeout(3000);
            await page.click(mashupElements.clickonSearchWoc);
            await page.waitForTimeout(5000);
            });

        test("Depersonalization logs", async ({ }) =>{
           test.setTimeout(60000);
            await page.click(mashupElements.DepersonalizationLogspage2);
            console.log("Selected 2nd page...");
            await page.click(mashupElements.DepersonalizationLogspage1);
            console.log("selected 1st page...");

            await page.click(mashupElements.RefreshIcon);
            await page.waitForTimeout(3000);
            await page.waitForSelector(mashupElements.RemoveDate);
            let removalDate=await page.$eval(mashupElements.RemoveDate, el => el.innerText);
            await console.log("RemoveDate " + removalDate);
            
            await page.waitForSelector(mashupElements.RemovedBy);
            let removeby = await page.$eval(mashupElements.RemovedBy, el => el.innerText)
            await console.log("removed.." + removeby);

            await page.waitForSelector(mashupElements.StatusofDepersonalizationLogs1);
            let status1= await page.$eval(mashupElements.StatusofDepersonalizationLogs1, el => el.innerText);
            await console.log("status.." + status1);




            await page.click(mashupElements.DepersonalizationLogsfirstRunId);
           //await page.click(mashupElements.DepersonalizationLogsSixRunId);
            await page.waitForSelector(mashupElements.ErrorMessage);
            let Message=await page.$eval(mashupElements.ErrorMessage, el => el.innerText);
            console.log("Message.. " + Message);
            await page.waitForSelector(mashupElements.table1);
            let entities = await page.$eval(mashupElements.table1, el => el.innerText);
            await console.log("Rmoved Entity..." + entities);
            await page.waitForTimeout(3000);
            

           
        });  
        });