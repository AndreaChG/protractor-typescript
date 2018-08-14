import {CommonPageHelper} from '../common/common-page.helper';
import {InboxPage} from './inbox.po';


export class StartANewMessage extends CommonPageHelper{
    
    constructor() {
        super();
    }

    static clickOnCompose(){
        return new StartANewMessage().clickOnButton();
    }
    
    public async clickOnButton(): Promise<void> {
        super.click(InboxPage.composeButton);
    }

}
