const { test,expect } =require("@playwright/test");
const mashupElements = new(require('./utils-mashup/selector'));
const utils = new (require('./utils-mashup/utils'));
let page;

test.describe('mashup Test', () => {
    test.beforeAll(async ( {browser} ) => {
      const context = await browser.newContext();
      await context.grantPermissions(['geolocation'], { origin: 'https://ns-staging.cxm-salescloud.com/auth/login' });
      page = await context.newPage();
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

    test('mashupDelete',async ({ }) =>{
        await page.click(mashupElements.clickonMashupsearchIcon);
        await page.fill(mashupElements.enteronsearchIcon, 'Testing');
        await page.keyboard.press("Enter");
        await page.waitForTimeout(3000);
        await page.click(mashupElements.deleteButton);
        await page.click(mashupElements.clickonOkAlert);
        await page.waitForTimeout(3000);
        let Delete=await page.locator("sap-crm-flex span.sap-crm-message-strip-group__collapsed__message");
        await expect(Delete).toHaveText("Selected mashups deleted.");
        console.log("Mashup deleted successfully");
    });
});