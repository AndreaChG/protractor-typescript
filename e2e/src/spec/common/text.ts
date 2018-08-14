import {browser, ElementFinder, ExpectedConditions} from 'protractor';

export class Text{ 
    
    constructor(private item: ElementFinder) {
    }

    static of(item: ElementFinder){
        return new Text(item).getTextOf();
    }

    public async getTextOf(): Promise<string> {
        browser.wait(ExpectedConditions.visibilityOf(this.item))
        return this.item.getText();
    }
}