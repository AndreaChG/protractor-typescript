import {CommonPageHelper} from '../common/common-page.helper';
import {By, element} from 'protractor';

export class NewMessagePage extends CommonPageHelper{

    static get recipients() {
        return element(By.css('[name="to"]'))
    }

    static get subject() {
        return element(By.css('[name="subjectbox"]'));
    }

    static get messageBody() {
        return element(By.css('[role="textbox"]'));
    }

    static get addAttachment(){
        return element(By.css('input[type="file"]'));
    }

    static get sendButton(){
        return element(By.xpath('//*[@role="button" and text()="Send"]'));
    }

    static get fileAttached(){
        return element(By.css('[aria-label^="Attachment"] a div:nth-child(1)'));
    }

}