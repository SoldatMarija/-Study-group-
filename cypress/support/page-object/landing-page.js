class landingPage{

    get errorMessageContainer(){
        return cy.get('.error-message-container')
    }

    get loginButton(){
        return cy.get('[data-test="login-button"]')
    }

    get formGroup(){
        return cy.get('.form_group')
    }

    get getLoginLogo(){
        return cy.get('[class="login_logo"]')
     }

    open(){
        cy.visit('https://www.saucedemo.com/')
    }
}

export default landingPage()