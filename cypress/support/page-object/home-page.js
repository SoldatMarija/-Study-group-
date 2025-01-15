class HomePage{
    get addToCartSauceLabsBoltTShirtButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    get addToCartSauceLabsBikeLightButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }
    get shoppingCartBadge(){
        return cy.get('[data-test="shopping-cart-badge"]')
    }
    get addToCartSauceLabsBackpackButton(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    get itemQuantity(){
        return cy.get('[data-test="item-quantity"]')
    }
    get shoppingCartLink(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    get itemList(){
        return cy.get('.bm-item-list')
    }
    get burgerMenu(){
        return cy.get('#react-burger-menu-btn')
    }
    open(){
        cy.visit('https://www.saucedemo.com/inventory.html')
    }
}

export default new HomePage()