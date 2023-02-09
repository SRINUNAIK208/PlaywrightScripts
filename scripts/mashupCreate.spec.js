const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {
        test.beforeAll(async ( {browser} ) => {
          const context = await browser.newContext();
          await context.grantPermissions(['geolocation'], { origin: 'https://ns-staging.cxm-salescloud.com/auth/login' });
          page = await context.newPage();
         // page = await browser.newPage();
          page.setViewportSize({ width: 1250, height: 600 });
          await utils.mashuplogin(page, "user.na", "North$tar1");
          await page.waitForTimeout(10000);
        });

      
        test.afterAll(async ({browser} ) => {
          await browser.close();
        });

        test('clickonuser',async ({ }) =>{
            await utils.userProfile(page,"Mashup Authoring");
            await page.waitForTimeout(3000);
            await page.click(mashupElements.clickonSearchWoc);
            await page.waitForTimeout(3000);
            });

        test('createmashup',async ({ }) =>{
            test.setTimeout(60000);
            await page.click(mashupElements.clickoncreateMashup);
            await page.waitForTimeout(3000);
            await page.fill(mashupElements.MashupName, 'Testing01');
            await page.fill(mashupElements.MashupHeight,'400');
            await page.fill(mashupElements.MashupDescription, 'Playwright01');
            await page.waitForTimeout(3000);
            await page.fill(mashupElements.UrlText,'https://cpq-sales.calliduscloud.com/');
           // await page.scrollIntoViewIfNeeded(mashupElements.UrlText);
           await page.click(mashupElements.AddParameter);
           await page.click(mashupElements.AddParameter);
           await page.waitForTimeout(3000);
           await page.fill(mashupElements.AddparameterText1, 'playwright');
           await page.check(mashupElements.MandatoryCheckbox);
           await page.click(mashupElements.AddparameterText2);
           await page.click(mashupElements.clickonwebTable);
           await page.waitForTimeout(3000);
           await page.click(mashupElements.clickonSave);
           await page.waitForTimeout(3000);
           //await page.waitForSelector("sap-crm-flex span[class='sap-crm-flex sap-crm-alert-group__header__title']", {timeout: 5000});
           let MashupCreated=await page.locator("sap-crm-flex span[class='sap-crm-flex sap-crm-alert-group__header__title']");
           await page.waitForTimeout(3000);
           await expect(MashupCreated).toContainText("Mashup created successfully");
           console.log("Mashup created successfully");
            
        });


       
    });
     


    