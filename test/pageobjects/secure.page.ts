import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get accUser () {
        return $('#profiledd');
    }

    public get linkLogout () {
        return $('.user-menu-topright .opendd li:nth-child(6)');
    }

    public get sessionReasonLogout () {
        return $('input[value="Tea Break"]');
    }

    public get btnOk(){
        return $('//*[@id="logout-reason"]/div/div/div/form/div/div[2]/input[1]');
    }

    public get lableLogin () {
        return $('.loginscreen h1');
    }
    public async logout () {
        await this.accUser.click();
        await this.linkLogout.click();
       // await this.sessionReasonLogout.click();
        //await this.btnOk.click();

    }
}

export default new SecurePage();
