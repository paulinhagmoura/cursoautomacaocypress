/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import {elementos} from "../../Pages/ProjetoPages";

//cenário 1 Pesquisar produto
Given('que o usuario acessa o site Madeira Madeira', function () {
    const URL = "https://www.madeiramadeira.com.br";
    cy.visit(URL);
    cy.viewport(1200,800)
});

When('pesquisa um Produto', function () {
    cy.get(elementos.campobusca,{timeout:5000}).eq(1).click({force:true}).type('prateleiras').type("{ENTER}");

})
Then ('o produto e exibido com sucesso',function(){
    cy.get(elementos.imagemprateleira,{timeout:5000}).eq(0).should("be.visible")

})
//cenário 2 Incluir produto no carrinho
When ('adiciona um produto no carrinho', function () {
    cy.get(elementos.imagemprateleira,{timeout:5000}).eq(0).click({force:true})
    cy.get(elementos.carrinhoadicionar,{timeout:5000}).eq(0).click({force:true})

})

Then('o produto e adicionado com sucesso', function () {
    cy.get(elementos.itemnocarrinho,{timeout:5000}).eq(0).click({force:true})
    cy.get(elementos.prateleiracarrinho,{timeout:5000}).eq(1)

    

})

//cenário 3 Excluir produto do carrinho
When('excluo um produto do carrinho', function () {
    cy.get(elementos.buttonExcluir,{timeout:10000}).click({force:true})
})

Then('a quantidade de produtos fica zerada', function () {
    cy.get(elementos.mensagemCarrinhoVazio,{timeout:5000}).should("be.visible")
})