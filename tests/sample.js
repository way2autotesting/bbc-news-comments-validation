const {test,expect} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');


//Feature: Comment Interaction for Signed-In User
test.only('Scenario: Signed-in user sees comment icon enabled on an article with comments', async ({page})=>
    {
    //    const context = await browser.newContext();
    //    const page = await context.newPage();

        const poManager = new POManager(page);

        const homePage = poManager.getHomePage();
        const emailSignInPage = poManager.getSignInEmailPage();
        const passSignInPage = poManager.getSignInPasswordPage();
        const commentsPage = poManager.getCommentsPage();
        
        //**Given the user is on the BBC homepage
   //     await page.goto("https://www.bbc.co.uk/");
        await homePage.goTo();
        console.log(await page.title());
        await expect(page).toHaveTitle("BBC - Home");

        //**And the user is signed in
    //    await page.getByRole("link",{name:"Sign in"}).click();                              //click sign in button
        await homePage.ClickSignInIcon();

        
        //await page.locator("[type='text']").fill("awesu.ronke@sky.uk");         //Enter email
    //    await page.getByLabel("username").fill("awesu.ronke@sky.uk");
        await emailSignInPage.EnterEmail("awesu.ronke@sky.uk")
    //    await page.locator("[type='submit']").click();                            //Continue button
        await emailSignInPage.ClickContinueButton();

        //await page.locator("[type='password']").fill("Rayjoel1979!");           //Enter password
    //    await page.getByLabel("password").fill("Rayjoel1979!");
        await passSignInPage.EnterPassword("Rayjoel1979!");
    //    await page.locator("[data-bbc-container='PasswordForm']").click();      //Sign In
        //await page.getByRole("button",{name:'Submit'}).click(); 
        await passSignInPage.ClickSignInButton();

        //**When the user navigates to a Top News Headline article with comments
    //    const commentLists = await page.locator("[type='comments']");           //List of Headline article with comments
    //    await commentLists.first().waitFor();                                   //Wait for all comments
    //    const count = await commentLists.count();
    //    await console.log(count);
        await homePage.CheckAndCountArticlesWithComment();
        await homePage.ValidateAllArticlesWithComment();

    //    for(let i=0; i<count; ++i){

    //        if(commentLists.nth(i).isVisible()){
    //            await console.log("Iteration "+i);
    //            await commentLists.nth(i).waitFor();  
    //            await commentLists.nth(i).click();
                //expect(await page.locator("h2:has-text('Join the conversation')").isVisible()).toBeTruthy();
    //            await expect(page.getByText("Join the conversation")).toBeVisible();
                //await expect(page.locator("[class*='ssrcss-xkj8jk-DisplayName']")).toHaveText("Ronke");
                //await expect(page.getByLabel("Ronke")).toHaveText("Ronke");

                // Navigate back to the previous page
    //            await page.goBack();
                // Optional: Wait for the previous page to load
    //            await page.waitForLoadState('load');
                //page.locator("h3:has-text('TextName')")"; or page.locator("text=TextName");
    //        }
            

    //    }

                await console.log("End test"); 
});

test('Page Context Playwright test', async ({page})=>
    {
        await page.goto("https://www.google.com");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");

        const Button = page.locator("svg.Gdd5U");
        await page.locator("textarea.gLFyf").fill("");// to clear the field
        await page.locator("textarea.gLFyf").fill("muataw nigeria ltd");
        //await page.locator("svg.Gdd5U").click();
        await Button.click();

        //extract text
    //   await page.waitForLoadState('networkidle');//wait for network (idle mode) like api available in the page
    //await page.locator("h1.p4pvTd").first().waitFor(); // OR alternatively
        console.log(await page.locator("h1.p4pvTd").textContent());

        //if there are nth elements available 
        //console.log(await page.locator("h1.p4pvTd").first().textContent());
        //console.log(await page.locator("h1.p4pvTd").nth(0).textContent());

        //to grabs all
        //const allTitle = await page.locator("h1.p4pvTd").allTextContents();
        //console.log(allTitle);//in arrays
    //chrome - plugins/cookies


    //select static dropdown
   // const dropdown = page.locator("svg.Gdd5U");
   // await dropdown.selectOption("consult"); //'consult' is the value from the source code
   // await page.pause();

   //to check radio button is checked
 //  await expect(page.locator("h1.p4pvTd").last()).toBeChecked();
 //  console.log(await page.locator("h1.p4pvTd").last().isChecked());

 //manage links
//  const context = await browser.newContext();
//  const page = await context.newPage();
//  await page.goto("https://www.facebook.com");

//promiseHooks.all(
//[
//context.waitForEvent('page'), //listen for any new page pending
//documentLink.click(),  //open new page link again
//])

//record and playback
//comend: npx playwright codegen url to autmate
});//[type='comments']