const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {
        test.beforeAll(async ( {browser} ) => {
          page = await browser.newPage();
          await utils.mashuplogin(page, "user.na", "North$tar1");
          await page.waitForTimeout(10000);
        });

      
        test.afterAll(async ({browser} ) => {
          await browser.close();
        });

        test('clickonuser',async ({ }) =>{
            await utils.userProfile(page,"Retention Rule for Employees");
            await page.waitForTimeout(3000);
            await page.click(mashupElements.clickonSearchWoc);
            await page.waitForTimeout(5000);
            });

        test('Retention Rule For Employee', async ({ }) => {
          expect(await page.isDisabled(mashupElements.saveButton)).toBe(true);
          console.log("Save button Disabled");
          expect(await page.isDisabled(mashupElements.cancelButton)).toBe(true);
          console.log("cancel button Disabled");
          let element1=await page.$(mashupElements.FirstRecordRetentioPeriod);
          let box1=await element1.boundingBox();
          await page.mouse.move(box1.x + box1.width / 2, box1.y + box1.height / 2);
          await page.click(mashupElements.EditIconofRetentionPeriod);
          await page.fill(mashupElements.inputofRetentionPeriod, '5');
          await page.keyboard.press('Enter');
          await page.waitForTimeout(5000);
          await page.click(mashupElements.saveButton);
          await page.click(mashupElements.RetentionPeriodConfirmationNo);
          await element1.scrollIntoViewIfNeeded();
          await page.waitForTimeout(5000);
          expect(await page.isDisabled(mashupElements.saveButton)).toBe(true);
          console.log("Save button Disabled");
          expect(await page.isDisabled(mashupElements.cancelButton)).toBe(true);
          console.log("cancel button Disabled");
          //await page.waitForSelector(mashupElements.FirstRecordRetentioPeriod);
          let element2=await page.$(mashupElements.FirstRecordRetentioPeriod);
          let box2=await element2.boundingBox();
          await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
          await page.click(mashupElements.EditIconofRetentionPeriod);
          await page.fill(mashupElements.inputofRetentionPeriod, '3');
          await page.keyboard.press('Enter');
          await page.waitForTimeout(5000);
          await page.click(mashupElements.saveButton);
          await page.waitForTimeout(3000);
          await page.click(mashupElements.RetentionPeriodConfirmationYes);
          await page.waitForSelector(mashupElements.RetentionPeriodSuccessMessage);
          let RetentionMessage = await page.$eval(mashupElements.RetentionPeriodSuccessMessage, el => el.innerText);
          console.log("Message.." + RetentionMessage);
          await page.waitForTimeout(5000);
          await page.waitForSelector(mashupElements.RetentionPage2);
          let page2 = await page.$eval(mashupElements.RetentionPage2, el => el.innerText);
          expect(page2).toBe('2');
          await page.click(mashupElements.RetentionPage2);
          console.log("Selected 2nd page");
          await page.click(mashupElements.RetentionPage1);
          console.log("Selected 1st page");

        })    
        });