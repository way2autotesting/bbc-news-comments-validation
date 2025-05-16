import {test,expect,Locator, Page} from '@playwright/test';


export class SignInEmailPage{

    emailOrUsername: Locator;
    continueBtn: Locator;
    page: Page;


    constructor(page: Page){

        this.page = page;
        this.emailOrUsername = page.getByLabel("username");
        this.continueBtn = page.locator("[type='submit']");
    }

    //Actions
    async EnterEmail(email:string){

        await this.emailOrUsername.fill(email);
    }

     async ClickContinueButton(){

        await this.continueBtn.click();
    }
}
module.exports = {SignInEmailPage};