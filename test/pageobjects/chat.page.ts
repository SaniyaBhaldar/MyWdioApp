import Page from "./page";

class ChatPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnClickMe () {
        return $('input[type="button"]');
    }

    public get getOnlineChatLink () {
        return $('#Hlink');
    }

    public get getAccNmChat () {
        return $('.section-height .chat-screen-title');
    }

    public async waitForDisplayAccNmChat () {
        return await (await $('.section-height .chat-screen-title')).waitForDisplayed({timeout:2000});
    }

    public async waitUntilAccNmChat () {
        return await (await $('.section-height .chat-screen-title')).waitUntil(async function () {
            return (await this.getText())!=''},
        {timeout:9000});
    }


    public async initiateChat () {
        await this.btnClickMe.click();
        await this.getOnlineChatLink.click();
        await this.waitForDisplayAccNmChat();

    }

    public openChatUrl () {
        return super.openChatUrl();
    }
}

export default new ChatPage();
