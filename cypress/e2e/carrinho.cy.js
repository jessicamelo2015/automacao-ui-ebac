///<reference types="cypress"/>

describe('acesso a pagina inicial', () => {
    beforeEach(() => {
        cy.paginaInicial()
    });

it('removendo produtos do carrinho', () => {
    
    cy.login()
    cy.selecionarProdutos()
    cy.adicionarCarrinho()
    cy.intercept('PUT','**/public/updateCart/663d7e277294efad05afd1f8',{fixture:'remover.json'}).as('remover')
    cy.retirarProdutos()
   
});
it('adicionando produtos no carrinho', () => {
    
    cy.login()
    cy.selecionarProdutos()
    cy.intercept('PUT','**/public/updateCart/663d7e277294efad05afd1f8',{fixture:'add.json'}).as('ADD')
    cy.adicionarCarrinho()
    
   
});
it('alterar produtos do carrinho', () => {
    
    cy.login()
    cy.selecionarProdutos()
    cy.adicionarCarrinho()
    cy.intercept('PUT','**/public/updateCart/663d7e277294efad05afd1f8',{fixture:'update.json'}).as('UP')
    cy.alterarProdutosCarrinho()
    
   
});
})