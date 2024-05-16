
///<reference types="cypress"/>

export const checkout={
    realizarCheckout(){
        cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click()
        cy.get('[data-testid="completeCheckout"]').click()
    }
}