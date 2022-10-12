import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    /**
     * define selectors using getter methods
     */
     public get inputOrgID () {
        return $('#OrgID');
    }
    public get inputUsername () {
        return $('#Username');
    }

    public get inputPassword () {
        return $('#txtPassword');
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (orgID: string,username: string, password: string) {
        await this.inputOrgID.setValue(orgID);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        await browser.maximizeWindow();
        return super.open('login');
    }
    
}

export default new LoginPage();
