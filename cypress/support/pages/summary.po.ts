/// <reference types="cypress" />

export class SummaryPage {
    public getExitButton(): Cypress.Chainable {
        return cy.get('#btnExit');
    }

    public getSummaryText(): Cypress.Chainable {
        return cy.get('#textSummary');
    }
}