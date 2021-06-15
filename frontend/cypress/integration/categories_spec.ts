describe('categories', () => {
  it('loads index page with header', () => {
    cy.visit('/categories')

    cy.contains('h1', 'Categories')
  })
})
