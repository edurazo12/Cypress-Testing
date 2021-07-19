
describe('page', () => {
    it('works', () => {
        cy.visit('http://localhost:3000')
    })
})

describe("Form test: Name", () => {
    it('tests that name input is working', () => {
        cy.get('[for="name"] > input')
        .type('Esteban')
        .should('have.value', 'Esteban')

        cy.get('[for="email"] > input')
        .type('edurazo12@gmail.com')

        cy.get('[for="password"] > input')
        .type('password')

        cy.get('select')
        .select('FF14')

        cy.get('[data-cy="terms"]')
        .click()
        .should('have.checked', true)

        cy.get('button#submit')
        .should('not.be.disabled')

    })

    it('error messages are displayed when information not given', () => {
        cy.get('[for="email"] > input')
        .clear()

        cy.get('[data-cy="email-error-msg"]')
        .should('have.value', '')
    })
})