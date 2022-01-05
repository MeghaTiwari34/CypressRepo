class openNewAccountPage{

    openNewAccountButton(){
        return cy.get('input[value="Open New Account"]');
    }

    selectAccountType(accountType){
        return cy.get('select').eq(0).select(accountType)
    }

    openNewCheckingAccount(){
        this.selectAccountType('CHECKING')
        cy.wait(1000)
        this.openNewAccountButton().click()
    }

    openNewSavingsAccount(){
        this.selectAccountType('SAVINGS')
        cy.wait(1000)
        this.openNewAccountButton().click()
    }

}

export default openNewAccountPage