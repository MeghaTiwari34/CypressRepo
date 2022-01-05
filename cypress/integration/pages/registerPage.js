class registerPage{

    firstname(){
        return cy.get('input[name="customer.firstName"]');
    }

    lastname(){
        return cy.get('input#customer\\.lastName');
    }

    address(){
        return cy.get('#customer\\.address\\.street');
    }

    city(){
        return cy.get('#customer\\.address\\.city');
    }

    state(){
        return cy.get('#customer\\.address\\.state');
    }

    zipcode(){
        return cy.get('#customer\\.address\\.zipCode');
    }

    phoneNo(){
        return cy.get('#customer\\.phoneNumber');
    }

    ssn(){
        return cy.get('#customer\\.ssn');
    }

    username(){
        return cy.get('#customer\\.username');
    }

    password(){
        return cy.get('#customer\\.password');
    }

    confirmPassword(){
        return cy.get('#repeatedPassword');
    }

    registerButton(){
        return cy.get('input[value="Register"]');
    }



    registerUser(firstName, lastName, address, city, state, zipcode, phoneNo, ssn, username, password){
        this.firstname().type(firstName)
        this.lastname().type(lastName)
        this.address().type(address)
        this.city().type(city)
        this.state().type(state)
        this.zipcode().type(zipcode)
        this.phoneNo().type(phoneNo)
        this.ssn().type(ssn)
        this.username().type(username)
        this.password().type(password)
        this.confirmPassword().type(password)
        this.registerButton().click()
    }




}

export default registerPage