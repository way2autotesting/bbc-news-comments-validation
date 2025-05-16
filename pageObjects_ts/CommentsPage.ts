import {test,expect,Locator, Page} from '@playwright/test';


export class CommentsPage{

    conversationTitle: Locator;
    registerLink: Locator;
    page: Page;


    constructor(page:Page){

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