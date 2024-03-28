const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, host: '0.0.0.0' }); // Ascolta su tutte le interfacce di rete

console.log('Server WebSocket in ascolto');

wss.on('connection', (ws) => {
    console.log('Nuova connessione WebSocket');

    ws.on('message', (message) => {
        console.log(`Messaggio ricevuto: ${message}`);
        // Puoi fare qualcosa con il messaggio qui, ad esempio inoltrarlo ad altri client
    });

    ws.on('close', () => {
        console.log('Connessione WebSocket chiusa');
    });
});
