describe('Challenge3', () => {
  
    it('First test case', () => {
     cy.visit('https://work.co/')
     cy.get('[class="Header3 Page-title"]').should('contain', 'Introduction')
     cy.get('[data-test-id="header-title-text"]').should('contain', 'We solve complex problems through design & technology')
    })
   
    it('Second test case', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.url().should('include', '/grid')
        cy.url().should('eq', 'https://work.co/grid')
    })
    
    it('Thrid test case', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.get('[data-test-id="grid-select-clients-link"]').click()
        cy.url().should('include', '/clients/')  
        cy.url().should('eq', 'https://work.co/clients/')
    })

    it('Fourth test case', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.get('[data-test-id="grid-expertise-capabilities-link"]').click()
        cy.url().should('include', '/company/')
        cy.url().should('eq', 'https://work.co/company/')
    })
})

