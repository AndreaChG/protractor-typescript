import {By, element,ElementFinder} from 'protractor';

export class InboxPage {

    static get composeButton() {
        return element(By.xpath('//*[@role="button" and (.)="Compose"]'));
    }

    static get confirmationMsg(){
        return element(By.css('.aT .bAq'));
    }

    static inboxEmailArrived(subject:string):ElementFinder{
        return element(By.xpath(`//span[@class="bog" and (.)="${subject}"]`));
    }

  
}