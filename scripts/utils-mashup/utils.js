const { selectors } = require("@playwright/test");

const console = require("console");
//const mashupElements = new (require('./utils-mashup/selector'));


module.exports = class utils{
    constructor(){
        this.mashuplogin= async function(page, username, password){
            await page.goto("https://ns-staging.cxm-salescloud.com/auth/login");
            await page.fill("sap-crm-input[formcontrolname='username'] #inputControl", username);
            await page.fill("sap-crm-input[formcontrolname='password'] #inputControl", password);
            await page.click("sap-crm-button[id='loginSubmit'] button");
            
        }

        this.userProfile= async function(page, searchWoC){
            
            await page.click("sap-crm-avatar[slot='control'] div[aria-label='Menu Button']");
        //    await page.click(selectors.mashupElements)
           /* await page.waitForSelector("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0");
            let userProfileName = await page.$eval("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0", el => el.innerText);
            console.log("userName.." + userProfileName);*/
            await page.click("sap-crm-button[kind='text'] button >> nth=1");
            await page.click("sap-crm-tabs li[role='tab'] >> nth=1");
            await page.click("sap-crm-input[icon='search'] #inputControl");
            await page.fill("sap-crm-input[icon='search'] #inputControl",searchWoC);
        }
        this.userNameInfo = async function(page){
            await page.click("sap-crm-avatar[slot='control'] div[aria-label='Menu Button']");
            
            await page.waitForSelector("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0");
            let userProfile = await page.$eval("sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0", el => el.innerText);
            console.log("userName.." + userProfile);
        }
        this.toGetInnerTextOfAnElement = async function (page, selector) {
            return await page.$eval(selector, element => element.innerText);
        }
    }
}