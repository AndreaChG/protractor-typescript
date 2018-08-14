import {CommonPageHelper} from '../common/common-page.helper';
import {InboxPage} from './inbox.po';
import {browser} from 'protractor';


export class Open extends CommonPageHelper{
    
    
    constructor(private withSubject:string) {
        super();
    }

    static emailWithSubject(withSubject:string){
        return new Open(withSubject).fromInbox();
    }
    
    public async fromInbox(): Promise<void> {
        await super.click(InboxPage.inboxEmailArrived(this.withSubject));
        await browser.sleep(2000);
    }

}
