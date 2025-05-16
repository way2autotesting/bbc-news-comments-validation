const {page,expect} = require('@playwright/test');
class HomePage{

    constructor(page){

        this.page = page;
        this.signInIcon = page.getByRole("link",{name:"Sign in"});
        this.articlesWithCommentList = page.locator("[type='comments']");
        this.conversationTitle = page.getByText("Join the conversation");
    }

    //Actions
    async goTo(){

        await this.page.goto("https://www.bbc.co.uk/");
    }

    async ClickSignInIcon(){

        await this.signInIcon.click();
    }

     async CheckAndCountArticlesWithComment(){

        const commentLists = await this.articlesWithCommentList;           //List of Headline article with comments
        await commentLists.first().waitFor();                                   //Wait for all comments
        const count = await commentLists.count();
        await console.log(count);
    }

    async ValidateAllArticlesWithComment(){
        const commentLists = await this.articlesWithCommentList; 
        const subTitle = await this.conversationTitle;          //List of Headline article with comments
        await commentLists.first().waitFor();                                   //Wait for all comments
        const count = await commentLists.count();
         for(let i=0; i<count; ++i){

            if(commentLists.nth(i).isVisible()){
                await console.log("Iteration number "+i);
                await commentLists.nth(i).waitFor();  
                await commentLists.nth(i).click();
                 
                await expect(subTitle).toBeVisible(); 
                //expect(await page.locator("h2:has-text('Join the conversation')").isVisible()).toBeTruthy();
        
                // Navigate back to the previous page
                await this.page.goBack();
                // Optional: Wait for the previous page to load
                await this.page.waitForLoadState('load');
                }
            }
        }
    
    async ClickOneArticlesWithComment(){
        const commentLists = await this.articlesWithCommentList; 
        const subTitle = await this.conversationTitle;          //List of Headline article with comments
        await commentLists.first().waitFor();                                   //Wait for all comments
        const count = await commentLists.count();
        await console.log(count);
         for(let i=0; i<count; ++i){

            if(await commentLists.nth(i).isVisible()){
                await console.log("Iteration number "+i);
                await commentLists.nth(i).waitFor();  
                await commentLists.nth(i).click();

                break;         
                }
            }
    }
}
module.exports = {HomePage};