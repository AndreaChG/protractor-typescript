import {CommonPageHelper} from '../common/common-page.helper';
import {NewMessagePage} from './message.po';
import {browser} from 'protractor';


export class Message extends CommonPageHelper{
    
    constructor() {
        super();
    }

    static send(){
        return new Message().sendTheMessage();
    }
    
    public async sendTheMessage(): Promise<void> {
        await NewMessagePage.sendButton.click();
        await browser.sleep(5000);
    }

}
