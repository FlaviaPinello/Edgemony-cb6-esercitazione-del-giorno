
// Prendendo spunto da quanto fatti oggi nella app completa, voi dovreste aggiungere un nuovo schema di dati nella cartella models 
// per arricchire il nostro database. Scegliete qualsiasi dato vogliate.
// Quindi create prima il nuovo schema e poi connettendivi al vostro db e avviando 
// l'applicazione,controllate la corretta creazione della nuova collezione. 
// Poi dovete creare un nuovo file di routing nella cartella controllers 
// nella quale dovete impostare i nuovi percorsi per la gestione della nuova collezione. 
// Esempio: se creo uno schema per libri, il router dedicato potrà essere chiamato routesLibri. 
// Impostate il get con la renderizzazione di una pagina che rispetti il nuovo percorso. Per esempio /libro. 
// Ricordatevi di registrare tutte le nuove strutture nel file di inizializzazione server.js, La app infatti, deve poter utilizzare 
// il nuovo percorso su cui comunica il nuovo router. Nella cartella views create la pagina che risponde al nuovo percorso
//  e nel quale sarà presente un form per l'inserimento dei dati nella nuova collezione. Create anche la pagina 
//  di visualizzazione dei dati. A questo punto, una volta provati i nuovi 
// percorsi, sarà semplice attivare le funzioni necessarie per le operazioni


const mongoose = require('mongoose');


//sto creando un oggetto della classe schema con cui gestico i miei dati
var notaSchema = new mongoose.Schema({
    brand: {
        type: String,
        
    },
     collection: {
        type: String,
      
    },
    email: {
        type: String
    },
    number_outfit: {
        type: String
    },
    years: {
        type: String
    },
    text: {
        type: String
    }
});




mongoose.model('notaModel', notaSchema);