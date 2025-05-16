const {page,expect} = require('@playwright/test');
class SignInPasswordPage{

    constructor(page){

        this.page = page;
        this.password = page.getByLabel("password");
        this.signInBtn = page.locator("[data-bbc-container='PasswordForm']");
    }

     //Actions
    async EnterPassword(pass){

        await this.password.fill(pass);
    }

       async ClickSignInButton(){

        await this.signInBtn.click();
    }
}
module.exports = {SignInPasswordPage};