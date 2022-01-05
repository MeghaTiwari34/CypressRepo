import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import OpenNewAccountPage from "../pages/openNewAccountPage"
import HomePage from "../pages/homePage"
const openNewAccountPage = new OpenNewAccountPage();
const homePage = new HomePage();

//Opening a Checking Account
When('Clicks on Open New Account link and then clicks on Open New Account button', function(){

    homePage.clickOnOpenNewAccountLink();
    openNewAccountPage.openNewCheckingAccount();
    
})

// Validating account is opened successfully
Then('New Account is opened successfully', function(){

    cy.get('.title').should('contain', 'Account Opened')

})

// Opening an Savings Account
When('Clicks on Open New Account link, selects account type as Savings and then clicks on Open New Account button', function(){

    homePage.clickOnOpenNewAccountLink();
    openNewAccountPage.openNewSavingsAccount();
    
})