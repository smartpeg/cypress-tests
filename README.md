# 📐📐📐
Cypress per test di un componente Angular
## Dipendenze
```bash
sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
curl -fsSL https://raw.githubusercontent.com/mklement0/n-install/stable/bin/n-install | bash -s latest
source ~/.bashrc
npm install -g @angular/cli
npm install -D @angular/cli @angular-devkit/build-angular @angular/core @angular/common @angular/platform-browser-dynamic
```
## Preparazione
```bash
ng new test-component
cd test-component
npm install cypress --save-dev
```
## Installazione
## Obiettivo

L'obiettivo di questo esperimento è stato:
- Comprendere il funzionamento di Cypress.
- Creare ed eseguire test automatici su un sito di prova.
- Valutare vantaggi, svantaggi ed eventuali limitazioni risetto ad altri strumenti disponibili(TestRigor,TestZeus-Hercules,Autify).

## Risultati
I test vengono eseguiti direttamente nel browser o in modalità headless, sfruttando l’infrastruttura locale o sistemi di CI/CD.
È possibile esportare i log e i report tramite il framework stesso o con integrazioni esterne (ad esempio con Cypress Dashboard o plugin dedicati).
La versione gratuita offre tutte le funzionalità core e consente di eseguire test end-to-end completi; le funzionalità avanzate di reporting, analisi e parallelizzazione sono disponibili nel servizio a pagamento Cypress Cloud.
