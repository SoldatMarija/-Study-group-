describe('Check the Text on the main page', () =>{ 
    it('Check the text', ()=> {

      cy.visit('https://work.co/')
      cy.get('[data-test-id="header-title-text"]').should('contain', 'We solve complex problems through design & technology')
    
    })
})