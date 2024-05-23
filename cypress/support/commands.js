import { faker } from '@faker-js/faker';
Cypress.Commands.add('paginaInicial', () => { 
  cy.setCookie('ebacStoreVersion','v2',{domain:'lojaebac.ebaconline.art.br'})
  cy.visit('/')
  });

  Cypress.Commands.add('login', () => { 
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="email"]').type('cliente@ebac.art.br')
    cy.get('[data-testid="password"]').type('GD*peToHNJ1#c$sgk08EaYJQ')
    cy.get('[data-testid="btnLogin"]').click()
    });
    Cypress.Commands.add('selecionarProdutos', () => { 
      
      cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"] > .css-146c3p1').click()
      cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"] > .r-cqee49').click()
      cy.get('[style="font-size: 22px; font-family: Montserrat-Bold; color: rgb(79, 79, 79);"]').should('contain','Womens Wingtip Shoes Handmade')
      });
      Cypress.Commands.add('retirarProdutos', () => { 
        cy.get('[data-testid="remove"]').click()
    });
    Cypress.Commands.add('alterarProdutosCarrinho', () => { 
      cy.get('[data-testid="addItem"]').click()
  });

      Cypress.Commands.add('adicionarCarrinho', () => { 
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="productName"]').should('contain','Womens Wingtip Shoes Handmade')
        //cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click()
        });
        Cypress.Commands.add('adicionarEndereco', () => { 
          cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(faker.person.fullName())
          cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type('12345678996')
          cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(faker.location.street())
          cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(faker.location.city())
          cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(faker.location.state())
          cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(faker.location.zipCode())
          cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3)').click()
          });