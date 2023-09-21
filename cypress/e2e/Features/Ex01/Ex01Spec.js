/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import { elementos } from "../../Pages/Ex01Pages";

const elementosLoja = elementos;

Given("que o usuario esta no site", function() {
    const URL = "https://www.madeiramadeira.com.br/";
    cy.visit(URL)
})
When("pesquisa por um produto", function() {
    cy.get(elementosLoja.campoBusca, {timeout: 5000}).eq(1).click({force: true}).type("Prateleiras").type("{ENTER}");
})
Then("o produto e exibido", function(){
    cy.get(elementosLoja.imagemPrateleira).eq(1).should("be.visible");
})