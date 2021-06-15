describe('articles', () => {
  it('loads index page with header', () => {
    cy.visit('/articles')

    cy.contains('h1', 'Articles')
  })
})
