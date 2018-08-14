import {CommonPageHelper} from '../common/common-page.helper';
import {LoginPage} from './login.po';

export class EnterCredentials extends CommonPageHelper {

    constructor(private username: string,private password:string) {
        super();
    }

    static login(username:string, password:string) {
        return new EnterCredentials(username,password).loginUser();
    }
   
    public async loginUser(): Promise<void>{
         super.sendKeys(LoginPage.username,this.username);
         super.click(LoginPage.identifierNextButton);
         
         super.sendKeys(LoginPage.password, this.password);
         super.click(LoginPage.passwordNextButton);
    }

}
