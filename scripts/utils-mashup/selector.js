module.exports = class Mashup {
    constructor(){

        this.clickonusermenu ="sap-crm-avatar[slot='control'] div[aria-label='Menu Button']";
        this.userProfileText ="sap-crm-flex[class='col-xs--paddingright-p3'] sap-crm-label >> nth=0";
        this.clickonsetting = "sap-crm-button[kind='text'] button >> nth=1";
        this.clickonAllsetting ="sap-crm-tabs li[role='tab'] >> nth=1";
        this.SearchIcon = "sap-crm-input[icon='search'] #inputControl";
        this.clickonSearchWoc = "sap-crm-list-item[clickable='true'] sap-crm-label";
        this.clickoncreateMashup = "sap-crm-button[icon='create'] button";
    
        this.MashupName = "sap-crm-input input[id='inputControl'] >> nth=0";
        this.MashupHeight = "sap-crm-input input[id='inputControl'] >> nth=1";
        this.MashupDescription = "sap-crm-input input[id='inputControl'] >> nth=2";
        this.mobileUsage = "sap-crm-switch input[type='checkbox'] >> nth=1";

        this.MashupNameEdit = "sap-crm-input input[id='inputControl'] >> nth=1";
        this.MashupHeightEdit = "sap-crm-input input[id='inputControl'] >> nth=2";
        this.MashupDescriptionEdit = "sap-crm-input input[id='inputControl'] >> nth=3";
    
        this.UrlText = "sap-crm-input input[id='inputControl'] >> nth=3";
        this.AddParameter = "sap-crm-button[kind='secondary'] button";
        this.AddparameterText1 = "sap-crm-input[class='ng-untouched ng-pristine ng-invalid'] input[id='inputControl'] >> nth=0";
        this.AddparameterTextEdit1 = "sap-crm-input input[id='inputControl'] >> nth=5";
        this.MandatoryCheckbox = "sap-crm-checkbox input[type='checkbox'] >> nth=2";
        this.AddparameterText2 = "sap-crm-button[icon='value_help'] button";
        this.clickonwebTable = "sap-crm-table tr[class='sap-crm-table__row'] >> nth=1";
        this.clickonwebTableEdit = "sap-crm-table tr[class='sap-crm-table__row'] >> nth=2"
        this.clickonSave = "sap-crm-button[slot='right'] button[tabindex='0'] >> nth=0";
        this.clickonEdit = "sap-crm-button[icon='edit'] button";
        this.clickonshowmore = "sap-crm-button button[class='sap-crm-btn sap-crm-btn--md sap-crm-btn--md--text_only sap-crm-btn--primaryclean'] >> nth=2";
        this.clickonMashupsearchIcon = "sap-crm-button[text='search'] button";
        this.enteronsearchIcon = "sap-crm-input[type='text'] input[id='inputControl']";
        this.deleteButton = "sap-crm-button[icon='delete'] button >> nth=0";
        this.clickonOkAlert = "sap-crm-button[kind='primary'] button";
        this.clickonSortingIcon = "sap-crm-button[icon='sort'] button";
        this.AscendingButton = "sap-crm-radio-button[name='sortOrder'] label >> nth=0";
        this.DesendingButton = "sap-crm-radio-button[name='sortOrder'] label >> nth=1";
        this.changedOnButton = "sap-crm-radio-button[name='sortProp'] label >> nth=0";
        this.createdOnButton = "sap-crm-radio-button[name='sortProp'] label >> nth=1";
        this.mashupIdButton = "sap-crm-radio-button[name='sortProp'] label >> nth=2";
        this.NameButton = "sap-crm-radio-button[name='sortProp'] label >> nth=3";
        this.AllDropdown = "sap-crm-drop-down-button[icon='curriculum'] button >> nth=0";
        this.AllButton = "sap-crm-radio-button label[role='radio'] >> nth=0";
        this.MyMashupButton = "sap-crm-radio-button label[role='radio'] >> nth=1";
        this.cretedByDropdown = "sap-crm-drop-down-button[slot='control'] button >> nth=1";
        this.service_userCheckbox = "sap-crm-checkbox[margin='spacefix'] input[type='checkbox'] >> nth=2";
        this.Yun_wangCheckbox ="sap-crm-checkbox[margin='spacefix'] input[type='checkbox'] >> nth=1";
        this.user_naCheckbox = "sap-crm-checkbox[margin='spacefix'] input[type='checkbox'] >> nth=0";
        this.changedByDropdown = "sap-crm-drop-down-button[slot='control'] button >> nth=2";
        this.changedByServiceUserCheckbox = "sap-crm-checkbox input[type='checkbox'] >> nth=0";
        this.changedByUsernaCheckbox = "sap-crm-checkbox input[type='checkbox'] >> nth=1";
        this.MashupIdlist = "sap-crm-object-card-description"
        this.NameofMashupList = "sap-crm-object-card-title"
        //this.GetusernaText = "sap-crm-label text='user.na'"

        //Data Disclosure Locators 
        this.SubjectTypeDropdown = "sap-crm-drop-down-button button[aria-label='Data Subject Filter List']";
        this.All_Employees = "sap-crm-list-item[aria-label='Trigger Data Subject'] div[id='label'] >> nth=0";
        this.All_Contacts = "sap-crm-list-item[aria-label='Trigger Data Subject'] div[id='label'] >> nth=1";
        this.All_individual_Customers = "sap-crm-list-item[aria-label='Trigger Data Subject'] div[id='label'] >> nth=2";
        this.employeeName = "sap-crm-table tr:nth-child(1) td:nth-child(2)";
        this.DDsearIcon = "sap-crm-button[icon='search'] button"
        this.DDSearchText = "sap-crm-input[icon='search'] input[id='inputControl']";
        //this.viewlog = "sap-crm-link a[role='link']";
        this.AccessByText = "sap-crm-flex sap-crm-label[id='disclosedUser']";
        this.AccessData = "sap-crm-icon div[aria-label='Access Data'] >> nth=0";
        this.viewlog = "sap-crm-icon div[aria-label='View Logs'] >> nth=0";
        this.ConfirmationPopYes = "sap-crm-button[title='Submit'] button"
        this.ConfirmationPopNo = "sap-crm-button[title='Cancel'] button";
        this.MessageWithRunId = "sap-crm-flex span[class='sap-crm-message-strip-group__collapsed__message']";
        this.viewRuns = "sap-crm-button[kind='neutraldark'] button";
       // this.logsHeaderText = "sap-crm-flex sap-crm-label[id='disclosedUser']";
        this.DataProtectionPolicyTab = "sap-crm-multi-tabs li >> nth=2";
        this.DisclosureLogsCloseTab = "sap-crm-multi-tabs div[class='sap-crm-icon sap-crm-icon--sm sap-crm-icon--primary'] >> nth=3";
        

       

        this.Data_subject_Type_dropdown= "sap-crm-popover[placement='bottom-start'] button >> nth=3"
        //sap-crm-drop-down-button[slot='control'] button >> nth=2
        this.searchDataSubjectType = "sap-crm-input[icon='search'] input[id='inputControl']";
        this.RunId = "sap-crm-link a[role='link']";
        this.Status = "sap-crm-tag div[class='sap-crm-tag sap-crm-tag--orange']";
        this.RunIdDDown = "sap-crm-popover[placement='bottom-start'] button >> nth=2";
        this.RunIdSearchText= "sap-crm-input input[id='inputControl']";
        this.hierarchicalIcon = "sap-crm-button[id='globalPreview'] button";

        //Depersonalization Logs 

        this.DepersonalizationLogspage1 = "sap-crm-button[text='1'] button"
        this.DepersonalizationLogspage2 = "sap-crm-button[text='2'] button";
        this.RefreshIcon = "sap-crm-button[icon='refresh'] button";
        this.RemoveDate = "sap-crm-table tr:nth-child(1) td >> nth=2";
        this.RemovedBy = "sap-crm-table tr:nth-child(1) td >> nth=3";
        this.StatusofDepersonalizationLogs = "sap-crm-table tr:nth-child(1) td >> nth=5";
        this.StatusofDepersonalizationLogs1 = "sap-crm-tag div[class='sap-crm-tag sap-crm-tag--orange']";
        this.ErrorMessage = "sap-crm-message-strip div[class='sap-crm-alert__title sap-crm-alert__title--banner']";
        this.DepersonalizationLogsfirstRunId = "sap-crm-table tr:nth-child(1) td >> nth=0";
        this.EntityfromTable = "sap-crm-table tr >> nth=1";
        this.DepersonalizationLogsSixRunId = "sap-crm-table tr:nth-child(6) td >> nth=0";
        this.Table = "sap-crm-table table[class='sap-crm-table']";
        this.table1 = "sap-crm-table tbody";

        //Retention Rule For Employee

        this.saveButton ="sap-crm-button[title='Save the retention rule.'] button";
        this.cancelButton = "sap-crm-button[title='Cancel the retention rule'] button";
        this.FirstRecordRetentioPeriod = "sap-crm-table tr td >> nth=1";
        this.EditIconofRetentionPeriod = "sap-crm-button[icon='edit'] button";
        this.inputofRetentionPeriod = "sap-crm-input[slot='edit-control'] input[id='inputControl']";
        this.RetentionPeriodConfirmationYes = "sap-crm-button[title='Submit'] button";
        this.RetentionPeriodConfirmationNo = "sap-crm-button[title='Cancel'] button";
        this.RetentionPeriodSuccessMessage = "sap-crm-message-strip[aria-label='Data retention rule saved'] div";
        this.RetentionPage1 = "sap-crm-button[text='1'] button";
        this.RetentionPage2 = "sap-crm-button[text='2'] button";


        //Audit logs locators

        this.Audit_EventType = "sap-crm-button[icon='expand_more'] button";
        this.configuration_change = "sap-crm-checkbox input[type='checkbox'] >> nth=6";
        this.AuditlogFirstRecordId = "sap-crm-table tr td >> nth=1";
        this.AuditlogFirstRecordTimestamp = "sap-crm-table tr td >> nth=2";
        this.AuditlogFirstRecordData = "sap-crm-table tr td >> nth=6";


    


    }


}