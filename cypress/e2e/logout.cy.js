import landingPage from "../support/page-object/landing-page"
import homePage from "../support/page-object/home-page"
import cartPage from "../support/page-object/cart-page"
import checkoutPage from "../support/page-object/checkout-page"

describe('Challenge5', () => {   
    beforeEach(() => {
      landingPage.open()
      landingPage.formGroup.find('[data-test="username"]').type('standard_user').click()
      landingPage.formGroup.find('[data-test="password"]').type('secret_sauce').click()
      landingPage.loginButton.click()
    
    })

    it('test case0 Login as a standard user', () => {
        homePage.burgerMenu.click()
        homePage.itemList.find('[data-test="logout-sidebar-link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')

    })

    it('test case1 ', () => {
        homePage.shoppingCartLink.click()
        cartPage.checkoutButton.click()
        cartPage.continueButton.click()
        cartPage.errorMessage.should('contain', 'Error: First Name is required')
     })

     it('test case2', () => {
        homePage.itemQuantity.should('not.exist')
        homePage.burgerMenu.click()
        homePage.itemList.find('[data-test="inventory-sidebar-link"]').click()
        homePage.addToCartSauceLabsBackpackButton.click()
        homePage.shoppingCartBadge.should('contain', '1')
        homePage.shoppingCartLink.click()
        cartPage.inventoryItemNameField.should('contain', 'Sauce Labs Backpack')
        homePage.itemQuantity.should('contain', '1')
        cartPage.itemPrice.should('contain', '$29.99')
        cartPage.removeSauceLabsBackpackButton.should('exist')
       cartPage.checkoutButton.should('exist')
        cartPage.continueShoppingButton.should('exist')
        cartPage.checkoutButton.click()
        checkoutPage.formGroup.find('[data-test="firstName"]').type('Name')
        checkoutPage.formGroup.find('[data-test="lastName"]').type('Last Name')
        checkoutPage.formGroup.find('[data-test="postalCode"]').type('11000')
        checkoutPage.continueButton.click()
        homePage.itemQuantity.should('exist')
        cartPage.inventoryItemNameField.should('contain', 'Sauce Labs Backpack')
        cartPage.itemPrice.should('contain', '$29.99')
        checkoutPage.finishButton.click()
        checkoutPage.completeHeader.should('contain', 'Thank you for your order!')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        checkoutPage.backHomeButton.should('exist')
        checkoutPage.backHomeButton.click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
       homePage.itemQuantity.should('not.exist')

     })

     it('test case3', () => {
        homePage.addToCartSauceLabsBikeLightButton.click()
        homePage.shoppingCartBadge.should('exist')
        homePage.shoppingCartLink.click()
        cartPage.removeSauceLabsBikeLightButton.click()
        homePage.shoppingCartBadge.should('not.exist')
     })

     it.only('test case4', () => {
        homePage.addToCartSauceLabsBoltTShirtButton.click()
        homePage.shoppingCartLink.click()
        cartPage.continueButton.click()
        cy.url('eq', 'https://www.saucedemo.com/inventory.html')
        homePage.shoppingCartBadge.should('contain', '1')
     })
})

