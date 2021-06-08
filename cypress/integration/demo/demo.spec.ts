/// <reference types="cypress" />

import { CompanyPage } from "cypress/support/pages/company.po";
import { LoginPage } from "cypress/support/pages/login.po"
import { UploadPage } from "cypress/support/pages/upload.po";
import { SummaryPage } from "cypress/support/pages/summary.po";


context('Flujo de Apertua Masivas', () => {

    let loginPage = new LoginPage();
    let companyPage = new CompanyPage();
    let uploadPage = new UploadPage();
    let summaryPage = new SummaryPage();

    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8010/register', {fixture: 'responses/register-company-mock'}).as('register');
        cy.intercept('GET', 'http://localhost:8010/upload', {fixture: 'responses/upload-mock'}).as('upload');
        cy.intercept('GET', 'http://localhost:8010/login', {fixture: 'responses/login-mock'}).as('login');

        cy.visit('http://localhost:4200/#/login')

    });

    it('should upload file', () => {

        // LOGIN
        loginPage.getLoginText().contains('Inicio de sesión').should('be.visible');

        loginPage.getUserForm().type('XT3434');
        loginPage.getPasswordForm().type('Peru1234');
        cy.screenshot('login-step', {capture: 'fullPage'});

        loginPage.getContinueButton().should('be.enabled').click();
        cy.wait('@login');

        // COMPAÑIA

        companyPage.getCompanyText().contains('Datos de la Empresa').should('be.visible');
        companyPage.getContinueButton().should('be.disabled');
        companyPage.getAddressForm().type('AV. JAVIER PRADO');
        companyPage.getNameCompanyForm().type('GRUPO GLORIA');
        companyPage.getRucForm().type('1231231231');

        cy.screenshot('company-step', {capture: 'fullPage'});

        companyPage.getContinueButton().click();
        cy.wait('@register')

        // UPLOAD
        uploadPage.getUploadText().contains('Carga de archivo').should('be.visible');
        uploadPage.getSelectAccountForm().find('#CTS').click({force: true});

        // ARCHIVO INVALIDO
        cy.get('input[type="file"]').attachFile('files/doc.pptx');

        uploadPage.getProccessButton().should('be.disabled');


        // ARCHIVO VALIDO 

        uploadPage.getCancelButton().click();
        cy.get('input[type="file"]').attachFile('files/example.txt');

        uploadPage.getDescriptionText().contains('El formato del archivo es correcto');

        cy.screenshot('upload-page', {capture: 'fullPage'});

        uploadPage.getProccessButton().click();

        cy.wait('@upload');


        // RESUMEN

        summaryPage.getSummaryText().contains('Resumen').should('be.visible');

        summaryPage.getExitButton().should('be.visible');

        cy.screenshot('summary-page', {capture: "fullPage"});
        summaryPage.getExitButton().click();


        

    })

})