describe('authors', () => {
  it('loads index page with header', () => {
    cy.visit('/authors')

    cy.contains('h1', 'Authors')
  })
})
