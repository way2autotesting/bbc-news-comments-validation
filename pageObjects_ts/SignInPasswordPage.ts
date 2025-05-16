import {test,expect,Locator, Page} from '@playwright/test';


export class SignInPasswordPage{

    password: Locator;
    signInBtn: Locator;
    page: Page;



    constructor(page: Page){

        this.page = page;
        this.password = page.getByLabel("password");
        this.signInBtn = page.locator("[data-bbc-container='PasswordForm']");
    }

     //Actions
    async EnterPassword(pass: string){

        await this.password.fill(pass);
    }

       async ClickSignInButton(){

        await this.signInBtn.click();
    }
}
module.exports = {SignInPasswordPage};