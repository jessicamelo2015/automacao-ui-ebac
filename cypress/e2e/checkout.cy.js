///<reference types="cypress"/>

import { checkout } from "../support/Page/checkout.page";

describe('acesso a página inicial', () => {
    beforeEach(() => {
        cy.paginaInicial()
    });

    it('faço o checkout', () => {
        cy.intercept('POST','**/api/placeOrder',{fixture:'checkout'}).as('POST')
        cy.login()
        cy.get('[href="/Tab/Home"]').should('contain', 'Home')
        cy.selecionarProdutos()
        cy.adicionarCarrinho()
        //cy.adicionarEndereco()
        checkout.realizarCheckout()
        cy.get('[data-testid="goBackHome"]').should('contain', 'Go Back Home')
    });
    
   
});