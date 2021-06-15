const selectors = {
  createDropdownButton: '[data-testid="create-dropdown-button"]',
  createDropdownContent: '[data-testid="create-dropdown-content"]',
}

describe('navigation', () => {
  it('should navigate between top level pages', () => {
    cy.visit('/articles')

    const topLevelLinks = ['/categories', '/articles', '/authors']

    topLevelLinks.forEach((link) => {
      cy.get(`nav a[href="${link}"]`).click()
      cy.location('pathname').should('eq', link)
    })
  })

  const createDropdownLinks = [
    '/categories/new',
    '/articles/new',
    '/authors/new',
  ]

  it('should show the create dropdown content', () => {
    cy.get(selectors.createDropdownButton).click()

    cy.wait(1000)

    cy.get(selectors.createDropdownContent)
  })

  it('should navigate to create pages', () => {
    // Navigate to articles first so we know where we are
    cy.visit('/articles')

    createDropdownLinks.forEach((link) => {
      cy.get(selectors.createDropdownButton).click()

      cy.wait(1000)

      cy.get(selectors.createDropdownContent).find(`a[href="${link}"]`).click()

      cy.location('pathname').should('eq', link)
    })
  })
})
