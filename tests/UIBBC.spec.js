const {test,expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');


//Feature: Comment Interaction for Signed-In User
test.only('Scenario 1: Signed-in user sees comment icon enabled on an article with comments', async ({page})=>
    {
        const poManager = new POManager(page);

        const homePage = poManager.getHomePage();
        const emailSignInPage = poManager.getSignInEmailPage();
        const passSignInPage = poManager.getSignInPasswordPage();
        const commentsPage = poManager.getCommentsPage();
        
        //**Given the user is on the BBC homepage */
        await homePage.goTo();
        console.log(await page.title());
        await expect(page).toHaveTitle("BBC - Home");

        //**And the user is signed in */
        await homePage.ClickSignInIcon();//click sign in button

        await emailSignInPage.EnterEmail("awesu.ronke@sky.uk")//Enter email
        await emailSignInPage.ClickContinueButton();//Continue button

        await passSignInPage.EnterPassword("Rayjoel1979!");//Enter password
        await passSignInPage.ClickSignInButton();//Sign In

        //**When the user checks and counts the number of articles with comments */
        await homePage.CheckAndCountArticlesWithComment();

        //**Then the user should be able to navigate through the comment icons, where comments are visible and the comment icon is enable */
        await homePage.ValidateAllArticlesWithComment();

        await console.log("End test"); 
});

//Feature: Comment Interaction for Unsigned User
test.only('Scenario 2: Unsigned user sees comment icon disabled on an article with comments', async ({page})=>
    {
        const poManager = new POManager(page);

        const homePage = poManager.getHomePage();
        const commentsPage = poManager.getCommentsPage();
        
        //**Given the user is on the BBC homepage */
        await homePage.goTo();
        console.log(await page.title());
        await expect(page).toHaveTitle("BBC - Home");

        //**And the user is not signed in */

        //**When the user navigates to a Top News Headline article with comments */
        await homePage.ClickOneArticlesWithComment();

        //**Then the comment page should prompt users to login or register */
        await commentsPage.RegisterPresent();

        await console.log("End test"); 
});