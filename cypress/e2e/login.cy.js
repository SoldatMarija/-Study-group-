import landingPage from "../support/page-object/landing-page"

describe('Challenge4', () => {   
   beforeEach(() => {
     landingPage.open()
    })
  
    it('First test case', () => {
      landingPage.getLoginLogo.should('contain', 'Swag Labs')
    })
    
    it('Second test case', () => { 
      landingPage.formGroup.find('[data-test="username"]').type('soldat@work.co').click()
      landingPage.formGroup.find('[data-test="password"]').type('secret_sauce').click()
      landingPage.loginButton.click()
      landingPage.errorMessageContainer.find('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
      cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('Third test case', () => {
        landingPage.formGroup.find('[data-test="username"]').type('standard_user').click()
        landingPage.formGroup.find('[data-test="password"]').type('secret_sauce').click()
        landingPage.loginButton.click()
        cy.url().should('include', '/inventory.html')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

}) 