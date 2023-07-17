# Gestionale con Express, React e MySQL

Questo progetto è un'applicazione web basata su Express, React e MySQL, che funge da gestionale per gestire determinati dati o processi.

## Descrizione
 
L'applicazione è stata sviluppata per fornire un'interfaccia web per la gestione di dati specifici o per automatizzare determinati processi. Utilizza Express come server backend per gestire le richieste e le operazioni sul database MySQL per archiviare e recuperare i dati. La parte client dell'applicazione è stata realizzata utilizzando React, che offre un'interfaccia utente interattiva e reattiva. Attraverso l'interfaccia utente, gli utenti possono visualizzare, aggiungere, modificare o eliminare i dati pertinenti al gestionale.

## Funzionalità

- Interfaccia utente intuitiva e reattiva per interagire con il gestionale.
- Operazioni CRUD (Create, Read, Update, Delete) per gestire i dati.
- Comunicazione tra il client React e il server Express per gestire le richieste e le operazioni sul database MySQL.

## Requisiti di sistema

- Node.js
- MySQL

## Installazione

1. Clonare il repository: `git clone https://github.com/tuo-username/gestionale-express-react-mysql.git`

2. Navigare nella cartella del progetto: `cd gestionale-express-react-mysql`

3. Installare le dipendenze per il server Express: `cd server` `npm install`

4. Tornare alla cartella principale del progetto e installare le dipendenze per il client React: `cd ..` `cd client` `npm install`



## Configurazione del database MySQL

1. Assicurarsi di avere MySQL installato sul proprio sistema (consiglio XAMPP).
2. Creare un database nel proprio server MySQL per archiviare i dati del gestionale.
3. Modificare il file `server.js` nella cartella `server` per configurare la connessione al proprio database MySQL. Assicurarsi di inserire correttamente il nome utente, la password e il nome del database.

## Avvio dell'applicazione

1. Avviare il server mySQL (se con XAMPP aprire sia Apache che mySQL)

2. Avviare il server Express: `cd server` `node server.js`
