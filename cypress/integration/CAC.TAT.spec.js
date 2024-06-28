/// <reference types="Cypress" /> 
//O bloco describe define a suíte de testes

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html') 
    });

    it('verifica o título da aplicação', function() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    })

     //em vez de armazenar o retorno de um cy.get em uma variável para usar depois, podemo susar o encadeamento de comandos

     it('preenche campos obrigatórios e envia formulários', function() {
        
        const longText =  'Teste, teste testeeeeeeee'
        
        cy.get('#firstName').type('Gabi')
        cy.get('#lastName').type('Borges')
        cy.get('#email').type('gabimullerborges@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 12})
        cy.get('button[type=submit]').click()
        cy.get('.success').should('be.visible')
     })


     it('exibe mensangem de erro ao submeter o form com email com formato inválido', function() {
        cy.get('#firstName').type('Gabi')
        cy.get('#lastName').type('Borges')
        cy.get('#email').type('gabimullerborges')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type=submit]').click()
        cy.get('.success').should('be.visible')
     })

     it('telefone continua vazio quando preenchido com valor inválido', function() {
            cy.get('#phone').type('sdjhasduh').should('have.value','')
     })

     it('exibe erro quando quando o telefone se torna obrigatório mas não é preenchido', function() {
        cy.get('#firstName').type('Gabi')
        cy.get('#lastName').type('Borges')
        cy.get('#email').type('gabimullerborges@gmail.com')
        cy.get('#phone').type('sdjhasduh')
        cy.get('#open-text-area').type('teste')
        cy.get('#phone-checkbox').check() //é melhor botar check em vez de click, pois se ele já estivesse marcado, desmarcaria
        cy.get('button[type=submit]').click()

        cy.get('.error').should('be.visible')
     }) //é para dar erro aqui, pq sucesso não deve ser visível

     it('preenche e limpa os campos', function(){
        cy.get('#firstName').type('Gabi').should('have.value', 'Gabi').clear()
        cy.get('#lastName').type('Borges').should('have.value', 'Borges').clear()
        cy.get('#email').type('gabimullerborges@gmail.com').clear().should('have.value', '')
     })

     it('envia o formulário com sucesso usando um comando customizado', function(){
      cy.fillMandatoryFieldsAndSubmit()
      cy.get('.success').should('be.visible')
     })

     it('seleciona o produto Youtube por seu texto', function(){
      cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
     })

     it('marca ambos os checkboxes, e dpeois desmarca o último' , function(){
      cy.get('input[type=checkbox]')
      .check()
      .last()
      .uncheck()
      .should('not.be.be.checked')
     })

     it('seleciona um arquivo da pasta fixtures', function(){
      cy.get('input[type="file"]')
         .should('not.have.value')
         .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
         .should(function($input) {
            console.log($input[0].files[0].name)
            expect($input[0].files[0].name).to.equal('example.json')})
     })
     
     it('seleciona um arquivo da pasta fixtures para a qual foi dado um alias', function(){
      cy.fixture('example.json').as('sampleFile') //example.json
      cy.get('input[type="file"]')
         .selectFile('@sampleFile')
         .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')})
     })

     it('verifica a âncora que abriria em outra página', function(){
         cy.get('#privacy a').should('have.attr', 'target', '_blank')
     })

     it.only('para lidar com a nova aba remove o target', function(){
      cy.get('#privacy a')
         .invoke('removeAttr', 'target')
         .click()
      cy.contains(' Política de privacidade')
  })
     
  })
  
 


