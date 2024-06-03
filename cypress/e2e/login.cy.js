describe('Challenge4', () => {   
   beforeEach(() => {
     cy.visit('https://www.saucedemo.com/') 
    })
  
    it('First test case', () => {
      cy.get('[class="login_logo"]').should('contain', 'Swag Labs')
    })
    
    it('Second test case', () => { 
      cy.get('.form_group').find('[data-test="username"]').type('soldat@work.co').click()
      cy.get('.form_group').find('[data-test="password"]').type('secret_sauce').click()
      cy.get('[data-test="login-button"]').click()
      cy.get('.error-message-container').find('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
      cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it.only('Third test case', () => {
        cy.get('.form_group').find('[data-test="username"]').type('standard_user').click()
        cy.get('.form_group').find('[data-test="password"]').type('secret_sauce').click()
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

}) 