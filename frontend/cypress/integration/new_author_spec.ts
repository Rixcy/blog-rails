describe('new author', () => {
  const selectors = {
    nameInput: 'input[name="name"]',
    nameError: '#name-field-error',
    taglineInput: 'input[name="tagline"]',
    avatarUrlInput: 'input[name="avatar_url"]',
    locationInput: 'input[name="location"]',
    submitButton: 'button[type="submit"]',
  }

  it('loads new author page with header', () => {
    cy.visit('/authors/new')

    cy.contains('h1', 'New Author')
  })

  it('renders form fields', () => {
    cy.visit('/authors/new')

    cy.get(selectors.nameInput).should('be.visible')
    cy.get(selectors.taglineInput).should('be.visible')
    cy.get(selectors.avatarUrlInput).should('be.visible')
    cy.get(selectors.locationInput).should('be.visible')
    cy.get(selectors.submitButton).should('be.visible')
  })

  it('creates a new author', () => {
    cy.visit('/authors/new')

    cy.get(selectors.nameInput).type('My Test Author')
    cy.get(selectors.taglineInput).type('The best thing about things is things')
    cy.get(selectors.avatarUrlInput).type('https://robohash.org/test')
    cy.get(selectors.locationInput).type('Leeds')

    cy.get(selectors.submitButton).click()

    cy.intercept('POST', '/authors', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(201)
      })
    })
  })

  it('shows error messages on lack of required fields', () => {
    cy.visit('/authors/new')

    cy.get(selectors.submitButton).click()

    cy.wait(1000)

    cy.get(selectors.nameError).contains('Please provide a name for the author')
  })

  it('generates a fallback avatar url if not provided', () => {
    cy.visit('/authors/new')

    cy.get(selectors.nameInput).type('My Test Author')

    cy.get(selectors.submitButton).click()

    cy.intercept('POST', '/authors', (req) => {
      req.continue((res) => {
        expect(res.body.avatar_url).to.eq(
          `https://robohash.org/${res.body.name}`
        )
      })
    })
  })
})
