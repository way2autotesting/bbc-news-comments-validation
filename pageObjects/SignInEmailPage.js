const {page,expect} = require('@playwright/test');
class SignInEmailPage{

    constructor(page){

        this.page = page;
        this.emailOrUsername = page.getByLabel("username");
        this.continueBtn = page.locator("[type='submit']");
    }

    //Actions
    async EnterEmail(email){

        await this.emailOrUsername.fill(email);
    }

     async ClickContinueButton(){

        await this.continueBtn.click();
    }
}
module.exports = {SignInEmailPage};