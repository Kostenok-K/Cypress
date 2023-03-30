/// <reference types="Cypress" />

describe('redir', () => {
    it('Редирект', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://mindbox.cloud/documents/sla')
        cy.url().should('include', 'https://mindbox.cloud/documents/sla-5-0/')
// надо доработать под JS
    })
})