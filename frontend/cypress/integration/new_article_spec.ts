describe('new article', () => {
  const selectors = {
    titleInput: 'input[name="title"]',
    bodyTextarea: 'textarea[name="body"]',
    categorySelect: '[data-testid="category-select"]',
    authorSelect: '[data-testid="author-select"]',
    submitButton: 'button[type="submit"]',
  }

  it('loads new article page with header', () => {
    cy.visit('/articles/new')

    cy.contains('h1', 'New Article')
  })

  it('renders form fields', () => {
    cy.visit('/articles/new')

    cy.get(selectors.titleInput).should('be.visible')
    cy.get(selectors.bodyTextarea).should('be.visible')
    cy.get(selectors.categorySelect).should('be.visible')
    cy.get(selectors.authorSelect).should('be.visible')
    cy.get(selectors.submitButton).should('be.visible')
  })

  it('creates a new article', () => {
    cy.visit('/articles/new')

    cy.get(selectors.titleInput).type('My Test Article')
    cy.get(selectors.bodyTextarea).type('My really interesting content')

    // category and author selects should be prepopulated already

    cy.get(selectors.submitButton).click()

    cy.intercept('POST', '/articles', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(201)
      })
    })
  })
})
