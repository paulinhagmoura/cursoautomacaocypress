Feature: Projeto Monitoria
    Scenario:   Consulta Produto 
        Given que o usuario acessa o site Madeira Madeira
        When pesquisa um Produto
        Then o produto e exibido com sucesso


        When adiciona um produto no carrinho
        Then o produto e adicionado com sucesso


        When  excluo um produto do carrinho
        Then a quantidade de produtos fica zerada