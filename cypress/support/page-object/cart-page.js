class cartPage{
    get removeSauceLabsBikeLightButton(){
        return cy.get('[data-test="remove-sauce-labs-bike-light"]')
    }
    get continueShoppingButton(){
        return cy.get('[data-test="continue-shopping"]')
    }
    get removeSauceLabsBackpackButton(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    get itemPrice(){
        return cy.get('[data-test="inventory-item-price"]')
    }

    get inventoryItemNameField(){
        return cy.get('[data-test="inventory-item-name"]')
    }

    get errorMessage(){
        return cy.get('[data-test="error"]')
    }

    get continueButton(){
        return  cy.get('[data-test="checkout"]')
    }

    get checkoutButton(){
        return cy.get('[data-test="checkout"]')
    }

}

export default cartPage()