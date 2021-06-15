describe('new category', () => {
  const selectors = {
    titleInput: 'input[name="title"]',
    colourSelect: '[data-testid="colour-select"]',
    submitButton: 'button[type="submit"]',
  }

  it('loads new category page with header', () => {
    cy.visit('/categories/new')

    cy.contains('h1', 'New Category')
  })

  it('renders form fields', () => {
    cy.visit('/categories/new')

    cy.get(selectors.titleInput).should('be.visible')
    cy.get(selectors.colourSelect).should('be.visible')
    cy.get(selectors.submitButton).should('be.visible')
  })

  it('creates a new category', () => {
    cy.visit('/categories/new')

    cy.get(selectors.titleInput).type('My Test Category')

    // colour should already be selected

    cy.get(selectors.submitButton).click()

    cy.intercept('POST', '/categories', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(201)
      })
    })
  })
})
