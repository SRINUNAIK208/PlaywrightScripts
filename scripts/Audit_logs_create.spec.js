const { test,expect } =require("@playwright/test");
const mashupElements = new(require('./utils-mashup/selector'));
const utils = new(require('./utils-mashup/utils'));
let page;

test.describe('Audit logs', () => {
    test.beforeAll(async ({browser}) => {
        test.setTimeout(40000);
        const context = await browser.newContext();
        await context.grantPermissions(['geolocation'],{ origin: 'https://ns-staging.cxm-salescloud.com/auth/login' });
        page = await context.newPage();
        await utils.mashuplogin(page, "user.na", "North$tar1");
        await page.waitForTimeout(15000);
    });
    test.afterAll(async ({browser}) =>{
        await browser.close();

    });

    test('click on userProfile', async ({ }) =>{
        await utils.userProfile(page, "Mashup Authoring");
        await page.click(mashupElements.clickonSearchWoc);
        await page.waitForTimeout(3000);

    });
    test('createmashup',async ({ }) =>{
        test.setTimeout(100000);
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
       await page.click(mashupElements.clickonshowmore);
       await page.waitForSelector("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label");
       let createdDate = await page.$eval("sap-crm-form-field[class='col-xs--paddingright form-section-field']:nth-child(8) sap-crm-label", el => el.innerText);
       await console.log("create date " + createdDate);
       await page.click("sap-crm-multi-tabs div[class='sap-crm-flex__grow sap-crm-multi-tabs__link__header__title'] >> nth=1");
       await page.waitForTimeout(5000);
       await page.fill(mashupElements.SearchIcon, "Audit logs");
       await page.waitForTimeout(5000);
       await page.click(mashupElements.clickonSearchWoc);
       await page.waitForTimeout(3000);
       await page.click(mashupElements.Audit_EventType);
       await page.check(mashupElements.configuration_change);
       await page.waitForTimeout(6000);
       await page.click(mashupElements.AuditlogFirstRecordId);
       await page.waitForTimeout(6000);
       await page.waitForSelector(mashupElements.AuditlogFirstRecordTimestamp);
       let Timestamp=await page.$eval(mashupElements.AuditlogFirstRecordTimestamp, el => el.innerText);
       await console.log("FirstRecord Timestamp " + Timestamp);
       /*if(createdDate == Timestamp)
       {
        console.log("Audit logs generated");
       }
       else
       {
        console.log("Audit logs  not generated");
       }*/
       await page.click(mashupElements.AuditlogFirstRecordData);
       await page.waitForTimeout(3000);
        
    });
});