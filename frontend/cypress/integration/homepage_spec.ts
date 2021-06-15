describe('homepage test', () => {
  it('redirects to the articles page', () => {
    cy.visit('/')
    cy.location('pathname').should('eq', '/articles')
  })
})
