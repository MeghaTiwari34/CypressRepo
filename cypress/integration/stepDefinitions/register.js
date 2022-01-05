import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
const registerPage = new RegisterPage();
const homePage = new HomePage();
const username = Math.random().toString(36).replace(/[^a-z]+/g, '')


// Registering a new user with the details mentioned in test Data file
When('User clicks on Register link, enters his details and clicks on Register button', function(){

    homePage.clickOnRegisterLink();
    registerPage.registerUser(this.data.registerData.firstname, this.data.registerData.lastname, this.data.registerData.address,
        this.data.registerData.city, this.data.registerData.state, this.data.registerData.zipcode, this.data.registerData.phoneNo,
        this.data.registerData.ssn, username, this.data.registerData.password)
    
})

// Validatating user is registered successfully
Then('User is registered successfully', function(){

    cy.title().should('contain', 'ParaBank | Customer Created')
    cy.get('.title').should('contain', 'Welcome '+username)

})

// When('User clicks on Register link, enters  details with an existing username and clicks on Register button', function(){

//     homePage.clickOnRegisterLink();
//     registerPage.registerUser(this.data.registerData.firstname, this.data.registerData.lastname, this.data.registerData.address,
//         this.data.registerData.city, this.data.registerData.state, this.data.registerData.zipcode, this.data.registerData.phoneNo,
//         this.data.registerData.ssn, this.data.registerData.existingUsername, this.data.registerData.password)
    
// })

// Then('Error is displayed and registration is unsuccessful', function(){

//     cy.get('#customer\.username\.errors').should('contain', 'This username already exists')



// })
