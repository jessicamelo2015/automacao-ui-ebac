///<reference types="cypress"/>

import cadastroPage from "../support/Page/cadastro.page";
import { homePage } from "../support/Page/home.page";


describe('entro no site para criar conta', () => {
beforeEach(() => {
  cy.setCookie('ebacStoreVersion','v2',{domain:'lojaebac.ebaconline.art.br'})
  cy.visit('/')
});

  it('clico para fazer o cadastro', () => {
    cy.intercept('POST','**/public/addUser',{fixture:'cadastro'}).as('POST')
    homePage.openMenu()
    cadastroPage.fazerCadastro()
    cy.get('.r-u9wvl5>.css-146c3p1').should('contain','EBAC Store')
  })

   
    
  
  
})