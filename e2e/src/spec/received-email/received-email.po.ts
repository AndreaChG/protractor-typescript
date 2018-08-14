import {By, element} from 'protractor';

export class ReceivedEmailPage{

    static get fileAttachedFromReceivedEmail(){
        return element(By.xpath('//div[@class="aQA"]'));
    }

    static get subjectFromReceivedEmail(){
        return element(By.xpath('//div[@class="nH V8djrc byY"]//h2'));
    }

    static get messageFromReceivedEmail(){
        return element(By.css('div[role="listitem"] div[dir="ltr"]'));
    }

}