/// <reference types="cypress" />

export class UploadPage {
    public getUploadButton(): Cypress.Chainable {
        return cy.get('#btnUpload');
    }

    public getInputOpenDialog(): Cypress.Chainable {
        return cy.get('#input');
    }

    public getUploadText(): Cypress.Chainable {
        return cy.get('#textUpload');
    }
    

    public getDescriptionText(): Cypress.Chainable {
        return cy.get('#textDescription');
    }
    
    public getCancelButton(): Cypress.Chainable {
        return cy.get('#btnCancel');
    }
    
    public getSelectAccountForm(): Cypress.Chainable {
        return cy.get('#select-account');
    }

    public getProccessButton(): Cypress.Chainable {
        return cy.get('#btnProccess');
    }
}