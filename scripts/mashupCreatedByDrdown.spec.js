const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {

        test.beforeAll(async ( {browser} ) => {
            test.setTimeout(60000);
          page = await browser.newPage();
          page.setViewportSize({ width: 1250, height: 600 });
         // test.setTimeout(60000);
          await utils.mashuplogin(page, "user.na", "North$tar1");
          await page.waitForTimeout(15000);
        });

      
        test.afterAll(async ({browser} ) => {
          await browser.close();
        });

        test('clickonuser',async ({ }) =>{
          test.setTimeout(60000);
          await page.click(mashupElements.clickonusermenu);
          
          await page.waitForSelector("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0", {timeout: 2000});
           let userName=await page.$eval("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0", el => el.innerText);
           await console.log("userName.." + userName);
          await page.click(mashupElements.clickonsetting);
          await page.click(mashupElements.clickonAllsetting);
          await page.click(mashupElements.SearchIcon);
          await page.fill(mashupElements.SearchIcon, 'Mashup Authoring');
          await page.waitForTimeout(3000);
          await page.click(mashupElements.clickonSearchWoc);
          await page.waitForTimeout(3000);
          await page.click(mashupElements.cretedByDropdown);
          await page.waitForTimeout(3000);
        
          await page.check(mashupElements.user_naCheckbox);
          //await page.check(mashupElements.service_userCheckbox);
          await page.waitForTimeout(3000);
          await page.click(mashupElements.clickonshowmore);
          await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(7) sap-crm-label");
          let CreatedByinText=await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(7) sap-crm-label",el => el.innerText);
          await console.log(" expected innerText " + inText);
          if(userName === CreatedByinTextinText)
            {
              await console.log("UserName verified");

            }
            else
            {
              await console.log("Username not verified");

            }
          

        });
    });