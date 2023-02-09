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
            await utils.userProfile(page,"Data Disclosure");
            await page.waitForTimeout(3000);
            await page.click(mashupElements.clickonSearchW);
            await page.waitForTimeout(5000);
            });

        /*test('Data Disclosure valid Msg', async ({ }) =>{
                test.setTimeout(60000);
                await page.click("sap-crm-button[text='2'] button");
                await page.waitForTimeout(5000);
                await page.waitForSelector("sap-crm-button[text='2'] button");
                let pagination=await page.$eval("sap-crm-button[text='2'] button", el => el.innerText);
                await console.log("pages.." + pagination);
                await expect(pagination).toBe('2');
                await console.log("selected 2nd page..");
                await page.waitForTimeout(5000);
                await page.click(mashupElements.DDsearIcon);
                await page.fill(mashupElements.DDSearchText, 'John Mike');
                await page.keyboard.press("Enter");
                await page.waitForTimeout(5000);
                await page.waitForSelector("sap-crm-table tr:nth-child(1) td:nth-child(2)");
                let employeeName=await page.$eval("sap-crm-table tr:nth-child(1) td:nth-child(2)", el => el.innerText);
                console.log("employee Name.. "  + employeeName);
                await page.click(mashupElements.AccessData);
                await page.click(mashupElements.ConfirmationPopNo);
                await page.click(mashupElements.AccessData);
                await page.waitForTimeout(5000);
                await page.click(mashupElements.ConfirmationPopYes);
                await page.waitForTimeout(5000);
                await page.waitForSelector(mashupElements.MessageWithRunId);
                let message=await page.$eval(mashupElements.MessageWithRunId, el => el.innerText);
               console.log("message " + message);
               if((message).toHaveText("Your previous request is being processed with Run"))
               {
                console.log("Request sent for second time..");
               }
               else
               {
                console.log("Request sent for first time..");
               }
            });*/
        });