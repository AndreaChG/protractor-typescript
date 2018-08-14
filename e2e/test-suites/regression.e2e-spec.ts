import {EnterCredentials,NewMessage,Message,InboxPage,StartANewMessage,Attach,Text, 
        NewMessagePage,Open,ReceivedEmailPage} from '../src/spec';
import {Start} from '../src/spec/login/open-login';
import {browser} from 'protractor';

describe('G mail suite', () => {
    let subject:string = `My Solution at ${new Date().toLocaleString()}`;
    let messageBody =`Hello!, the current time is: ${new Date().toLocaleString()}`;
    let start:Start;
    let toRecipient:string =`${browser.params.username}@${browser.params.userdomain}`;

    beforeEach(() => {
        start = new Start();
    });

    it('Should succesfully login', async () => {
        start.onLoginPage();
        EnterCredentials.login(browser.params.username,browser.params.password);

        expect(browser.getTitle()).toContain('Gmail');
    });

    it('Should compose a new email with attachment', async () => {
        StartANewMessage.clickOnCompose();
        NewMessage.compose(toRecipient,subject,messageBody);
        Attach.addAttachmentToMessage(browser.params.file);

        expect(Text.of(NewMessagePage.fileAttached)).toEqual(browser.params.file);
    });

    it('Should send an email', async()=>{
        Message.send();
       expect(Text.of(InboxPage.confirmationMsg)).toContain('Sending...' || 'Message sent.');
    });

    it('Should see new email in the Inbox', async()=>{
        expect(Text.of(InboxPage.inboxEmailArrived(subject))).toContain(subject);
    });
    
    it('Should be able to open email from Inbox',async()=>{
        Open.emailWithSubject(subject);
        
        expect(Text.of(ReceivedEmailPage.subjectFromReceivedEmail)).toContain(subject);
        expect(Text.of(ReceivedEmailPage.messageFromReceivedEmail)).toContain(messageBody);
        
        browser.actions().mouseUp(ReceivedEmailPage.fileAttachedFromReceivedEmail).perform();
        
        expect(Text.of(ReceivedEmailPage.fileAttachedFromReceivedEmail)).toContain(browser.params.file);
    });
});
