const { test,expect } = require ('@playwright/test');
const mashupElements = new (require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;


    test.describe('mashup Test', () => {
        test.beforeAll(async ( {browser} ) => {
          page = await browser.newPage();
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
            await page.click(mashupElements.clickonSearchWoc);
            await page.waitForTimeout(5000);
            });

       /* test('Data Disclosure valid Msg', async ({ }) =>{
          test.setTimeout(80000);
          await page.click(mashupElements.SubjectTypeDropdown);
          await page.click(mashupElements.All_individual_Customers);
          await page.click("sap-crm-button[text='2'] button");
          await page.waitForTimeout(5000);
          await page.waitForSelector("sap-crm-button[text='2'] button");
          let pagination=await page.$eval("sap-crm-button[text='2'] button", el => el.innerText);
          await console.log("pages.." + pagination);
          await expect(pagination).toBe('2');
          await console.log("selected 2nd page..");
          await page.waitForTimeout(5000);
          await page.click("sap-crm-button[text='1'] button");
          await page.waitForTimeout(3000);
          await page.click(mashupElements.DDsearIcon);
          await page.fill(mashupElements.DDSearchText, 'SKY02');
          await page.keyboard.press("Enter");

          await page.waitForTimeout(3000);
          await page.waitForSelector("sap-crm-table tr:nth-child(1) td:nth-child(2)");
          let employeeName=await page.$eval("sap-crm-table tr:nth-child(1) td:nth-child(2)", el => el.innerText);
          console.log("employee Name.. "  + employeeName);
          await page.waitForTimeout(5000);
          await page.click(mashupElements.AccessData);

          await page.click(mashupElements.ConfirmationPopNo);
          await page.click(mashupElements.AccessData);
          await page.waitForTimeout(5000);
          await page.click(mashupElements.ConfirmationPopYes);
          await page.waitForTimeout(5000);
          await page.waitForSelector(mashupElements.MessageWithRunId);
          let message=await page.$eval(mashupElements.MessageWithRunId, el => el.innerText);
          console.log("message " + message);
          await page.click(mashupElements.viewRuns);
          await page.waitForTimeout(5000);
      
          await page.click(mashupElements.Data_subject_Type_dropdown);
          await page.fill(mashupElements.searchDataSubjectType, 'Customer');
          await page.keyboard.press('Enter');
          await page.waitForTimeout(5000);
          await page.waitForSelector(mashupElements.RunId);
          let runid=await page.$eval(mashupElements.RunId, el => el.innerText);
          console.log(" runid.. "  + runid);

          await page.waitForSelector(mashupElements.Status);
          let status=await page.$eval(mashupElements.Status, el => el.innerText);
          console.log("status... " + status);
          await page.click(mashupElements.RunIdDDown);
          await page.fill(mashupElements.RunIdSearchText, runid);
          await page.keyboard.press('Enter');
          await page.waitForTimeout(5000);
          await page.click("sap-crm-table tr td >> nth=0");
          await page.waitForTimeout(5000);
          await page.click(mashupElements.hierarchicalIcon);
          await page.waitForTimeout(5000);
          await console.log("verified hierarchical list");
    });*/
      
     
       


      test('Data Disclosure Invalid Msg', async ({ }) =>{
          test.setTimeout(80000);
          await page.click(mashupElements.SubjectTypeDropdown);
          await page.click(mashupElements.All_individual_Customers);
          await page.click("sap-crm-button[text='2'] button");
          await page.waitForTimeout(5000);
          await page.waitForSelector("sap-crm-button[text='2'] button");
          let pagination=await page.$eval("sap-crm-button[text='2'] button", el => el.innerText);
          await console.log("pages.." + pagination);
          await expect(pagination).toBe('2');
          await console.log("selected 2nd page..");
          await page.waitForTimeout(5000);
          await page.click("sap-crm-button[text='1'] button");
          await page.waitForTimeout(3000);
          await page.click(mashupElements.DDsearIcon);
          await page.fill(mashupElements.DDSearchText, 'SKY01');
          await page.keyboard.press("Enter");

          await page.waitForTimeout(3000);
          //await utils.userNameInfo(page);
          await page.click(mashupElements.clickonusermenu);
          await page.waitForSelector(mashupElements.userProfileText);
          let userProfileName = await page.$eval(mashupElements.userProfileText, el => el.innerText);
          console.log(" userName.." + userProfileName);
          await page.click(mashupElements.viewlog);
          /*await page.waitForSelector(mashupElements.logsHeaderText);
          let logHeader = await page.$eval(mashupElements.logsHeaderText, el => el.innerText);
          console.log(" logHeaderText.." +logHeader);
          await expect(logHeader).toBe("Logs");*/
          
          await page.waitForSelector(mashupElements.AccessByText);
          let AccessBy = await page.$eval(mashupElements.AccessByText, el => el.innerText);
          console.log("AccessUser.. " + AccessBy);
         // await expect(AccessBy).toBe("userProfile");
         if(AccessBy === userProfileName)
         {
          console.log("AccessedBy user verified..")
         }
         else
         {
          console.log("AccessedBy user not verified...");

         }
         await page.click(mashupElements.DataProtectionPolicyTab);
         await page.click(mashupElements.SubjectTypeDropdown);
         await page.click(mashupElements.All_individual_Customers);
         await page.click(mashupElements.DDsearIcon);
         await page.fill(mashupElements.DDSearchText, 'SKY01');
         await page.keyboard.press('Enter');
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
         await page.click(mashupElements.viewRuns);
         await page.waitForTimeout(5000);
        await page.click(mashupElements.Data_subject_Type_dropdown);
        await page.fill(mashupElements.searchDataSubjectType, 'Customer');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);
        await page.waitForSelector(mashupElements.RunId);
        let runid=await page.$eval(mashupElements.RunId, el => el.innerText);
        console.log(" runid.. "  + runid);

        await page.waitForSelector(mashupElements.Status);
        let status=await page.$eval(mashupElements.Status, el => el.innerText);
        console.log("status... " + status);
        await page.click(mashupElements.RunIdDDown);
        //await page.fill(mashupElements.RunIdSearchText, runid);
        await page.fill(mashupElements.RunIdSearchText, runid);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);
        await page.click("sap-crm-table tr td >> nth=0");
        await page.waitForTimeout(5000);
        await page.click(mashupElements.hierarchicalIcon);
        await page.waitForTimeout(5000);
        await console.log("verified hierarchical list");
        
       
         

      }); 
        });
