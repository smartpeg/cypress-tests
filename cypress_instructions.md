
# Guida all'uso di Cypress

Questa breve guida descrive i passaggi per utilizzare **Cypress** e creare test automatizzati programmando il Javascript/Typescript.

## Creazione di un test

Un esempio di test (`cypress/example.cy.js`):

```javascript
describe('Esempio di test', () => {
  it('Visita la homepage e controlla il titolo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
```

## Esecuzione dei test

- Per aprire l'interfaccia grafica:
  ```bash
  npx cypress open
  ```

- Per eseguire i test da linea di comando:
  ```bash
  npx cypress run
  ```

## Screenshot e video

Cypress può generare screenshot e video automaticamente durante l'esecuzione dei test.
Questi file verranno salvati nelle cartelle predefinite `cypress/screenshots` e `cypress/videos`.
