class loginPage{

    username(){
        return cy.get('input[name="username"]');
    }

    password(){
        return cy.get('input[name="password"]');
    }

    submitButton(){
        return cy.get('input[type="submit"]');
        //return cy.get('.button').contains('Log In').click()
    }

    login(userName, password){
        this.username().type(userName)
        this.password().type(password)
        this.submitButton().click()
    }




}

export default loginPage