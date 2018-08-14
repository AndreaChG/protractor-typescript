import {CommonPageHelper} from '../common/common-page.helper';

export class Start extends CommonPageHelper {

    public async onLoginPage() {
        return super.goTo('/mail');
    }

    

}
