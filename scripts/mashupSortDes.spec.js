const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {
        test.beforeAll(async ( {browser} ) => {
          page = await browser.newPage();
          await utils.mashuplogin(page, "user.na", "North$tar1");
          await page.waitForTimeout(5000);
        });

      
        test.afterAll(async ({browser} ) => {
          await browser.close();
        });

        test('clickonuser',async ({ }) =>{
          await page.waitForTimeout(3000);
            await utils.userProfile(page,"Mashup Authoring");
            await page.waitForTimeout(3000);
            await page.click(mashupElements.clickonMashupAuthoring);
            await page.waitForTimeout(10000);
            });

        
        
        

      
        test('Desending order with CreatedOn', async ({ }) =>{
          test.setTimeout(120000);
          await page.click(mashupElements.clickonSortingIcon);
          await page.click(mashupElements.DesendingButton);
          await page.click(mashupElements.createdOnButton);
          await page.waitForTimeout(3000);
          //await page.locator("sap-crm-object-card-title sap-crm-flex div").first().click();
         await page.click(mashupElements.clickonshowmore);
         await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label");
         let CreatedOnDate=await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label",el => el.innerText);
          await console.log(" firstRecored " + CreatedOnDate);
          await page.waitForTimeout(10000);
        
        

        // await page.waitForSelector("sap-crm-object-card-title sap-crm-flex div:nth-child(-1)", {timeout: 5000});
         //await page.locator("sap-crm-object-card-title;nth-child(10) sap-crm-flex div").click();
         await page.click(mashupElements.clickonSortingIcon);
          await page.click(mashupElements.DesendingButton);
          await page.click(mashupElements.createdOnButton);
         await page.locator("sap-crm-object-card-title sap-crm-flex div >> nth=-1").click();
         await page.waitForTimeout(5000)
         //await page.click(mashupElements.clickonshowmore);
         await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label");
        let createdOnDate2=await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label",el => el.innerText);
        await console.log("lastRecored " + createdOnDate2);

        if( CreatedOnDate > createdOnDate2)
        {
          console.log("Descending order with CreatedOnDropdown verified");
        }
        else{
          
          console.log("Descending order with CreatedOnDropdown not verified");

        }
      });

        /*test('Desending order with ChangedOn', async ({ }) =>{
          test.setTimeout(120000);
          await page.click(mashupElements.clickonSortingIcon);
          await page.click(mashupElements.DesendingButton);
          await page.click(mashupElements.changedOnButton);
          await page.waitForTimeout(3000);
          //await page.locator("sap-crm-object-card-title sap-crm-flex div").first().click();
         await page.click(mashupElements.clickonshowmore);
         await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(10) sap-crm-label");
         let ChangedOnDate1=await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(10) sap-crm-label",el => el.innerText);
          await console.log(" first Record " + ChangedOnDate1);
          await page.waitForTimeout(10000);
        
        

        // await page.waitForSelector("sap-crm-object-card-title sap-crm-flex div:nth-child(-1)", {timeout: 5000});
         //await page.locator("sap-crm-object-card-title;nth-child(10) sap-crm-flex div").click();
         await page.click(mashupElements.clickonSortingIcon);
          await page.click(mashupElements.DesendingButton);
          await page.click(mashupElements.changedOnButton);
         await page.locator("sap-crm-object-card-title sap-crm-flex div >> nth=-1").click();
         await page.waitForTimeout(5000)
         //await page.click(mashupElements.clickonshowmore);
         await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(10) sap-crm-label");
        let changedOnDate2=await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(10) sap-crm-label",el => el.innerText);
        await console.log("last Record " + changedOnDate2);

        if( ChangedOnDate1 > changedOnDate2)
        {
          console.log("Descending order with changedOnDropdown verified");
        }
        else
        {
          
          console.log("Descending order with changedOnDropdown not verified");

        }
      });  */
            
            
     

        
        
           
    });