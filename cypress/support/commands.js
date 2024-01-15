Cypress.Commands.add("enviaCampos", function () {

    const texto = 'TESTE DO JF'

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