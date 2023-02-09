const { test,expect } =require("@playwright/test");
const mashupElements = new(require('./utils-mashup/selector'));
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
        test.setTimeout(60000);
        await utils.userProfile(page,"Mashup Authoring");
        await page.waitForTimeout(3000);
        await page.click(mashupElements.clickonSearchWoc);
        await page.waitForTimeout(3000);
        });

    test('mashupEdit',async ({ }) =>{
       test.setTimeout(60000);
        await page.click(mashupElements.clickonMashupsearchIcon);
        await page.fill(mashupElements.enteronsearchIcon, 'Testing01');
        await page.keyboard.press("Enter");
        await page.waitForTimeout(5000);
        await page.click(mashupElements.clickonEdit);
        await page.fill(mashupElements.MashupNameEdit,'Testing009');
        await page.waitForTimeout(3000);
        await page.click(mashupElements.clickonshowmore);
        await page.fill(mashupElements.MashupHeightEdit,'300');
        await page.waitForTimeout(3000);
        await page.fill(mashupElements.MashupDescriptionEdit, 'playwright009');
        await page.waitForTimeout(3000);
        
        await page.fill(mashupElements.AddparameterTextEdit1, "Testing01")
        await page.uncheck(mashupElements.MandatoryCheckbox);
        await page.click(mashupElements.AddparameterText2);
        await page.click(mashupElements.clickonwebTableEdit);
       await page.click("sap-crm-button[slot='right'] button[tabindex='0'] >> nth=1");
        let successTitle=await page.locator("sap-crm-flex span[class='sap-crm-flex sap-crm-alert-group__header__title']");
        await expect(successTitle).toContainText("Entries saved");
        console.log("Edited successfully");


    });  

});

