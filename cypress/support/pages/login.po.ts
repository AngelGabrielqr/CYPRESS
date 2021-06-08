/// <reference types="cypress" />

export class LoginPage {
    public getContinueButton(): Cypress.Chainable {
        return cy.get('#btnLogin');
    }

    public getUserForm(): Cypress.Chainable {
        return cy.get('#formUser');
    }

    public getPasswordForm(): Cypress.Chainable {
        return cy.get('#formPassword');
    }

    public getLoginText() : Cypress.Chainable {
        return cy.get('#textLogin')
    }
}