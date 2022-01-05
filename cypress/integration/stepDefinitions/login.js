import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/loginPage"
const loginPage = new LoginPage();

// Opening the application url
Given('Open the application url', function(){

    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})

// Logging in with valid user credentials
When('User enters the valid user credentials and click login', function(){

    loginPage.login(this.data.loginData.validUsername, this.data.loginData.validPassword);
    
})

// Validating login is successful
Then('Validate user lands on the Accounts Overview Screen', function(){

    cy.title().should('contain', 'ParaBank | Accounts Overview') 

})

// Logging in with invalid user credentials
When('User enters the invalid user credentials and click login', function(){

    loginPage.login(this.data.loginData.invalidUsername, this.data.loginData.invalidPassword);

})