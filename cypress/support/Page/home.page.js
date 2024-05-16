///<reference types="cypress"/>

export const homePage={
    openMenu(menu){
        cy.get('[href="/Tab/Account"]').click()
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    }
}