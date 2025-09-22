import { ButtonComponent } from '../button.component'

it('uses custom text for the button label', () => {
  cy.mount('<app-button>Click me!</app-button>', {
    imports: [ButtonComponent],
  })
  // Assert that a button component has the correct text
  cy.get('button').should('contains.text', 'Click me!')
})