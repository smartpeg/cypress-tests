# cypress-tests

Questa repository mostra come utilizzare **Cypress** per eseguire test end-to-end su un'applicazione web.

## Installazione

1. Clona la repo:
   ```bash
   git clone <repo-url>
   cd cypress-tests
   ```

2. Installa le dipendenze:
   ```bash
   npm install cypress --save-dev
   ```

3. Avvia Cypress:
   ```bash
   npx cypress open
   ```
## Obiettivo

L'obiettivo di questo esperimento è stato:
- Comprendere il funzionamento di Cypress.
- Creare ed eseguire test automatici su un sito di prova.
- Valutare vantaggi, svantaggi ed eventuali limitazioni risetto ad altri strumenti disponibili(TestRigor,TestZeus-Hercules,Autify).

## Risultati
I test vengono eseguiti direttamente nel browser o in modalità headless, sfruttando l’infrastruttura locale o sistemi di CI/CD.
È possibile esportare i log e i report tramite il framework stesso o con integrazioni esterne (ad esempio con Cypress Dashboard o plugin dedicati).
La versione gratuita offre tutte le funzionalità core e consente di eseguire test end-to-end completi; le funzionalità avanzate di reporting, analisi e parallelizzazione sono disponibili nel servizio a pagamento Cypress Cloud.
