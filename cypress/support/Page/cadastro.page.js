///<reference types="cypress"/>

import { faker } from '@faker-js/faker';

class cadastroPage {
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #number() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #repassword() { return cy.get('[data-testid="repassword"]') }
    get #create() { return cy.get('[data-testid="create"]') }


fazerCadastro(firstName,lastName,phone,email,password,repassword){
        this.#firstName.type(faker.person.firstName())
        this.#lastName.type(faker.person.lastName())
       this.#number.type(faker.phone.number())
        this.#email.type(faker.internet.email())
        this.#password.type('123456')
       this.#repassword.type('123456')
        this.#create.click()
    }
}
export default new cadastroPage;