/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach('verifica o título da aplicação', function () {
        cy.visit(`./src/index.html`)
        cy.title()
            .should(`be.equal`, `Central de Atendimento ao Cliente TAT`)
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {

        const texto = `RTESTESTETSTE TESTE TYESTE RTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTE`

        cy.get('#firstName')
            .type('JOAO FELIPE')

        cy.get('#lastName')
            .type('magdafuycker')

        cy.get('#email')
            .type(`felipe@email.com`)

        cy.get('#open-text-area')
            .type(texto, { delay: 0 })

        cy.contains(`button`, 'Enviar')
            .click().should(`be.visible`, `success`)

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

        const texto = `RTESTESTETSTE TESTE TYESTE RTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTE`
        cy.get('#firstName')
            .type('JOAO FELIPE')

        cy.get('#lastName')
            .type('magdafuycker')

        cy.get(`#email`)
            .type(`testeemail ruim`)

        cy.get('#open-text-area')
            .type(texto, { delay: 0 })

        cy.contains(`button`, 'Enviar')
            .click().should(`be.visible`, `error`)


    })

    it('campo telefone vazio ao nao ter valor numerico', function () {


        cy.get('#phone')
            .type('ABVFCRTEBE')
            .should(`have.value`, ``)


    })
    it('exibir erro com campo telefone obrigatorio', function () {

        const texto = `RTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTERTESTESTETSTE TESTE TYESTE`
        cy.get('#firstName')
            .type('JOAO FELIPE')

        cy.get('#lastName')
            .type('magdafuycker')

        cy.get(`#email`)
            .type(`testeemail ruim`)

        cy.get(`#phone-checkbox`)
            .check()

        cy.get('#open-text-area')
            .type(texto, { delay: 0 })

        cy.get('#phone')
            .type('ABVFCRTEBE')
            .should(`have.value`, ``)

        cy.contains(`button`, 'Enviar')
            .click().should(`be.visible`, `error`)




    })

    it(`insere e limpa campos, sem salvar`, function () {

        cy.get(`#firstName`)
            .type(`jessica`)
            .clear()
            .should(`have.value`, ``)

        cy.get(`#lastName`)
            .type(`jessica tambem`)
            .clear()
            .should(`have.value`, ``)

        cy.get(`#phone`)
            .type(`27999999999`)
            .clear()
            .should(`have.value`, ``)


    })

    it('envia formulario e envia sem preecher campos ', function () {


        cy.get(`[type="submit"]`)
            .click().should(`be.visible`, `error`)
    })

    it('envia formulario e envia sem preecher campos ', function () {


        cy.contains(`button`, 'Enviar')
            .click()
            .should(`be.visible`, `error`)
    })

    it('Comando customizado ', function () {

        cy.enviaCampos()

            .should(`be.visible`, `success`)
    })

    it('Seleciona um list TEXTO ', function () {

        cy.get('#product')

            .select(`YouTube`)
            .should('have.value', 'youtube')
    })

    it('Seleciona um list VELUE ', function () {

        cy.get('#product')

            .select(`mentoria`)
            .should('have.value', 'mentoria')
    })

    it('Seleciona um list INDICE', function () {

        cy.get('#product')

            .select(1)
            .should('have.value', 'blog')
    })

    it('marca um atendimento feedback', function () {

        cy.get('input[type="ratio"],[value="feedback"]')
            .check()
            .should(`have.value`, `feedback`)


    })

    it(`marca todos os antendimento`, function () {

        cy.get(`input[type="radio"]`)
            .should(`have.length`, 3)
            .each(function ($radio) {
                cy.wrap($radio).check();
                cy.wrap($radio).should(`be.checked`);

            })

        })

    it(`marca ambos e depois desmarca o ultimo`, function (){

        cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')


    })    
    
    it.only(`importa arquivos`,function(){

        cy.get('input[type=file]')
         .selectFile('cypress/fixtures/example.json') 

         
    })

    it.only('Importa arquivo drag and drop ', function(){
        cy.get('input[type=file]')
        .selectFile('cypress/fixtures/example.json', { action : 'drag-drop'}) 
        //simula como se o arquivo é arrastado para dentro do site
    })





})