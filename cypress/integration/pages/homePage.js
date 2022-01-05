class homePage{

    registerLink(){
        return cy.get('#loginPanel > :nth-child(3) > a')
    }

    openNewAccountLink(){
        return cy.get('#leftPanel > ul > :nth-child(1) > a')
    }

    clickOnRegisterLink(){
        this.registerLink().click()
    }

    clickOnOpenNewAccountLink(){
        this.openNewAccountLink().click()
    }


}

export default homePage