import {CommonPageHelper} from '../common/common-page.helper';
import {NewMessagePage} from './message.po';
import * as path from 'path';


export class Attach extends CommonPageHelper{
    
    
    constructor(private file:string) {
        super();
    }

    static addAttachmentToMessage(file:string){
        return new Attach(file).attach();   
    }
    
    public async attach(): Promise<void> {
        let filePath = path.resolve(__dirname,`../../resources/${this.file}`);
        await NewMessagePage.addAttachment.sendKeys(filePath); 
    }

}
