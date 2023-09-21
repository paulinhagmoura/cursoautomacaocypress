/*describe('Validar site Google', () => {

  beforeEach(() =>{
    cy.visit('https://www.google.com');
  })
    
  it.only('Pesquisar onça no Google', () => {
    cy.get('[id="APjFqb"]').click();
    cy.get('[id="APjFqb"]').type('onça WWF Brasil').type('{ENTER}');
    cy.get('[href="https://www.wwf.org.br/natureza_brasileira/areas_prioritarias/pantanal/nossas_solucoes_no_pantanal/protecao_de_especies_no_pantanal/onca_pintada/"]', {timeout:6000}).eq(0).click({force: true});
    cy.origin('https://www.wwf.org.br', () => {
      cy.get('[src="//cdnassets.panda.org/_skins/international/img/logo.png"]', {timeout: 6000}).should('be.visible')
  })
    
  })
})
exercicio 1*/
    describe('Validar imagem site Google', () => {
   it('Pesquisar imagem do Bradesco no Google',() => {
    cy.visit('https://www.google.com');
    cy.get('[class="iblpc"]').click();
    cy.get('[class="iblpc"]').type('Bradesco imagens logo').type('{ENTER}');
    cy.get('[class="uhHOwf BYbUcd"]').eq(1).click()
    cy.get('[class="uhHOwf BYbUcd"]',{timeout: 6000}).eq(1).should('be.visible')
    
  })})
  /*correcao tereza exercicio 1 consulta imagem e confirmar um item da paginanpm
  describe( "Exercicios",() =>{
    beforeEach(()=>{
        cy.visit("https://www.google.com");
    })
    
    it('Exercicio 1',()=>{
        cy.get('[class="gLFyf"]').click();
        cy.get('[class="gLFyf"]').type("Casa na natureza").type("{ENTER}");
        cy.get('[class="uhHOwf BYbUcd"]').eq(0).click();
        cy.contains('Airbnb Newsroom').should('be.visible');
    })
    /*correção  item no carrinho e-comerce Emilly*/
          it('Adicionar item no carrinho', () => {
          cy.visit('https://www.madeiramadeira.com.br/')
          cy.get('[class="cav--c-iIPOwB"]', { timeout: 50000 }).eq(0).click({ force: true });
          cy.get('[href="/cama-solteiro-multifuncional-2-gavetas-kiara-conquista-moveis-709194.html?index=vr-prod-poc-madeira-listings-best-seller-desc"]', { timeout: 20000 }).eq(0).click({ force: true });
          cy.get('[class="cav--c-iOefvc cav--c-iOefvc-fGlPcc-variant-primary cav--c-iOefvc-ieZmGuu-css"]', { timeout: 30000 }).eq(0).click({ force: true });
          cy.get('[class="cav--c-gNPphv cav--c-gNPphv-cdLabr-textStyle-bodyMediumSemibold cav--c-gNPphv-iDlqYz-css"]', { timeout: 6000 }).should('be.visible')
      
    
})