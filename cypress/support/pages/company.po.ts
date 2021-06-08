/// <reference types="cypress" />

export class CompanyPage {
    public getContinueButton(): Cypress.Chainable {
        return cy.get('#btnSave');
    }

    public getNameCompanyForm(): Cypress.Chainable {
        return cy.get('#formNameCompany');
    }

    public getRucForm(): Cypress.Chainable {
        return cy.get('#formRuc');
    }

    public getAddressForm() : Cypress.Chainable {
        return cy.get('#formAddress');
    }

    public getCompanyText(): Cypress.Chainable {
        return cy.get('#txtCompany')
    }
}