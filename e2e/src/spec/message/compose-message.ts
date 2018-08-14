import {CommonPageHelper} from '../common/common-page.helper';
import {NewMessagePage} from './message.po';

export class NewMessage extends CommonPageHelper{
    
    
    constructor(private recipient: string, private subject:string, private message:string) {
        super();
    }

    static compose(recipient:string,subject:string,message:string){
        return new NewMessage(recipient,subject,message).composeNewMessage();
    }
    
    public async composeNewMessage(): Promise<void> {
        super.sendKeys(NewMessagePage.recipients,this.recipient);
        super.sendKeys(NewMessagePage.subject,this.subject);
        super.sendKeys(NewMessagePage.messageBody,this.message);
    }

}
