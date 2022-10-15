import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import AccTestData from '../testdata/acc.testdata';
import ChatPage from '../pageobjects/chat.page';


describe('My Login application', () => {
    it('should login and logout with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(AccTestData.TC1.OrganizationID,AccTestData.TC1.Username,AccTestData.TC1.Password);
        await expect(SecurePage.accUser).toBeExisting();
        await SecurePage.logout();
        expect(SecurePage.lableLogin).toHaveTextContaining(AccTestData.TC2.expectLoginLable);       
    });

    it('should login with valid credentials and initiate a chat', async () => {
        await LoginPage.open();
        await LoginPage.login(AccTestData.TC1.OrganizationID,AccTestData.TC1.Username,AccTestData.TC1.Password);
        await expect(SecurePage.accUser).toBeExisting();
        await ChatPage.openChatUrl();
        await ChatPage.initiateChat();
        //browser.pause(5000);
        await expect(await ChatPage.getAccNmChat).toBeDisplayed();
    });
});


