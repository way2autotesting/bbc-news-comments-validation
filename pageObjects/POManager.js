const {HomePage} = require('./HomePage');
const {SignInEmailPage} = require('./SignInEmailPage');
const {SignInPasswordPage} = require('./SignInPasswordPage');
const {CommentsPage} = require('./CommentsPage');


class POManager{

    constructor(page){

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