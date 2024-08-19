describe('mock-operator', () => {
  it('passes', () => {
    cy.visit('https://mock-operator.qa.pokerskins.io/')
    cy.get('input[type="text"]').type('juvin')
    cy.contains("SIGN IN").click()
    
  })
})