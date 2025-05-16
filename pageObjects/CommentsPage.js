const {page,expect} = require('@playwright/test');
class CommentsPage{

    constructor(page){

        this.page = page;
        this.conversationTitle = page.getByText("Join the conversation");
        this.registerLink = page.getByRole("link",{name:"Register"});
    }

    //Actions
     async RegisterPresent(){

        const register = await this.registerLink; 
        await expect(register).toBeVisible(); 
     }
}
module.exports = {CommentsPage};