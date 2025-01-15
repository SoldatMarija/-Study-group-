class checkoutPage{
    get backHomeButton(){
        return cy.get('[data-test="back-to-products"]')
    }
    get completeHeader(){
        return cy.get('[data-test="complete-header"]')
    }
    get finishButton(){
        return cy.get('[data-test="finish"]')
    }
    get formGroup(){
        return cy.get('.form_group')
    }

}

export default checkoutPage()