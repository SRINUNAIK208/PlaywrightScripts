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
    /*test('Audit logs', async ({ }) => {
        test.setTimeout(1200000);
        await page.click(mashupElements.clickonMashupsearchIcon);
        await page.fill(mashupElements.enteronsearchIcon, 'Testing');
        await page.keyboard.press("Enter");
        await page.waitForTimeout(3000);
        await page.click(mashupElements.deleteButton);
        await page.click(mashupElements.clickonOkAlert);
        await page.waitForTimeout(3000);
        //await page.click("sap-crm-multi-tabs div[class='sap-crm-flex__grow sap-crm-multi-tabs__link__header__title sap-crm-multi-tabs__link__header__title--small']");
        await page.click("sap-crm-multi-tabs div[class='sap-crm-flex__grow sap-crm-multi-tabs__link__header__title'] >> nth=1");
        await page.waitForTimeout(5000);
        await page.fill(mashupElements.SearchIcon, "Audit logs");
        await page.waitForTimeout(5000);
        await page.click(mashupElements.clickonSearchWoc);
        await page.waitForTimeout(3000);
        await page.click(mashupElements.Audit_EventType);
        await page.check(mashupElements.configuration_change);
        await page.click(mashupElements.AuditlogFirstRecordId);
        await page.waitForTimeout(10000);
        await page.click(mashupElements.AuditlogFirstRecordData);
        await page.waitForTimeout(3000);
    });*/

});