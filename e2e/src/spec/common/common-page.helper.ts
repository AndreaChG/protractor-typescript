import {browser, ElementFinder, ExpectedConditions} from 'protractor';

export class CommonPageHelper {
   protected async goTo(url: string) {
        browser.waitForAngularEnabled(false);
        return browser.get(url);
    }

    public async click(item: ElementFinder) {
       browser.wait(ExpectedConditions.elementToBeClickable(item));
       return item.click();
    }

    public async sendKeys(item: ElementFinder, text:any){
        browser.wait(ExpectedConditions.visibilityOf(item))
        return item.sendKeys(text);
    }

    public async getText(item: ElementFinder){
        browser.wait(ExpectedConditions.visibilityOf(item));
        return item.getText();
    }
}
