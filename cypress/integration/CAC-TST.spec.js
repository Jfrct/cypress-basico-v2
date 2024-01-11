/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach('verifica o título da aplicação', function () {
        cy.visit(`./src/index.html`)
        cy.title().should(`be.equal`, `Central de Atendimento ao Cliente TAT`)
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

        cy.get(`[type="submit"]`)
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

        cy.get(`[type="submit"]`)
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
            .click()

        cy.get('#open-text-area')
            .type(texto, { delay: 0 })

        cy.get('#phone')
            .type('ABVFCRTEBE')
            .should(`have.value`, ``)

        cy.get(`[type="submit"]`)
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

})