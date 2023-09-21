/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { ELEMENTS } from "../../Pages/TestCucumberPages";

const elementosCucumber = ELEMENTS;

Given('que o usuario esta no Google', function () {
    const URL = "https://www.google.com";
    cy.visit(URL);
});

When('ele pesquisa por imagem', function () {
    const conteudo = "Casa na natureza";
    cy.get(elementosCucumber.campoPesquisa).click();
    cy.get(elementosCucumber.campoPesquisa).type(conteudo).type("{ENTER}");
});

Then('a imagem e exibida', function () {
    
    const validadorDaPesquisa = 'Airbnb Newsroom';
    cy.get(elementosCucumber.imagem).eq(0).click({force:true});
    cy.contains(validadorDaPesquisa).should('not.be.visible');
});