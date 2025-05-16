import { HomePage } from "../pageObjects_ts/HomePage";
import { SignInEmailPage } from "../pageObjects_ts/SignInEmailPage";
import { SignInPasswordPage } from "../pageObjects_ts/SignInPasswordPage";
import { CommentsPage } from "../pageObjects_ts/CommentsPage";
import {Page} from '@playwright/test';


export class POManager{
    homePage: HomePage;
    emailSignInPage: SignInEmailPage;
    passSignInPage: SignInPasswordPage;
    commentsPage: CommentsPage;
    page: Page;

    constructor(page:Page){

        this.page = page;
        this.homePage = new HomePage(this.page);
        this.emailSignInPage = new SignInEmailPage(this.page);
        this.passSignInPage = new SignInPasswordPage(this.page);
        this.commentsPage = new CommentsPage(this.page);
    }

    getHomePage(){

        return this.homePage;
    }

    getSignInEmailPage(){

        return this.emailSignInPage;
    }

    getSignInPasswordPage(){

        return this.passSignInPage;
    }

    getCommentsPage(){

        return this.commentsPage;
    }
}
module.exports = {POManager};