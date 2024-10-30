describe('Challenge5', () => {   
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/') 
      cy.get('.form_group').find('[data-test="username"]').type('standard_user').click()
      cy.get('.form_group').find('[data-test="password"]').type('secret_sauce').click()
      cy.get('[data-test="login-button"]').click()
    
    })

    it('test case0 Login as a standard user', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-item-list').find('[data-test="logout-sidebar-link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')

    })

    it('test case1 ', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
     })

     it('test case2', () => {
        cy.get('[data-test="item-quantity"]').should('not.exist')
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-item-list').find('[data-test="inventory-sidebar-link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
        cy.get('[data-test="item-quantity"]').should('contain', '1')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$29.99')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
        cy.get('[data-test="checkout"]').should('exist')
        cy.get('[data-test="continue-shopping"]').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('.form_group').find('[data-test="firstName"]').type('Name')
        cy.get('.form_group').find('[data-test="lastName"]').type('Last Name')
        cy.get('.form_group').find('[data-test="postalCode"]').type('11000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="item-quantity"]').should('exist')
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$29.99')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        cy.get('[data-test="back-to-products"]').should('exist')
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('[data-test="item-quantity"]').should('not.exist')

     })

     it('test case3', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
     })

     it.only('test case4', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.url('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
     })
})

