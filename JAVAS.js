
let amilcareMus = 0;
let am

function premuto(valore, fascio){
    var lista = document.getElementById("lista");
    var nuovoElemento = document.createElement("li");
    nuovoElemento.textContent = valore;
    amilcareMus += fascio
    console.log(amilcareMus)
    lista.appendChild(nuovoElemento);
    var contenutoLista = lista.innerHTML;
    console.log(contenutoLista)
    am = contenutoLista
    console.log(am)
}

const socket = new WebSocket('ws://localhost:8080');





window.onload = function () {
    var info = document.getElementById("informazione"); // Inizializza l'elemento "informazione"

    initPayPal();  // Chiama la funzione per inizializzare PayPal dopo che l'input è stato inizializzato
};

const messa = document.getElementById('informazione');

// Aggiungi un event listener per catturare l'evento di input
messa.addEventListener('input', function(event) {
    // Aggiorna la variabile con il valore dell'input
    inputValue = event.target.value;
    console.log(inputValue); // Mostra il valore memorizzato nella console (opzionale)

    // Salva il valore nell'localStorage ad ogni cambiamento nell'input
    sessionStorage.setItem('CRED', inputValue);
});

// Aggiungi un event listener per catturare l'evento di change
messa.addEventListener('change', function(event) {
    // Aggiorna la variabile con il valore dell'input
    inputValue = event.target.value;
    console.log(inputValue); // Mostra il valore memorizzato nella console (opzionale)

    // Salva il valore nell'localStorage quando l'utente ha finito di inserire il valore
    sessionStorage.setItem('CRED', inputValue);
});
var lista = document.getElementById("lista");
var gabb = lista.innerHTML

var amountValue = info.value; // Recupera il valore dell'input
var gg = sessionStorage.getItem("CRED")
function initPayPal() {
    // Includi l'SDK di PayPal
    var script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AZ0KBQ0HU2HhzI5ONmY_7Q1ei5TRK4p2gW71qia1ob4avQv2F1XjeFWDL8vuliTnLm0OABlHtXbylYaV';
    script.async = true;
    document.head.appendChild(script);

    // Attendi il caricamento dell'SDK di PayPal
    script.onload = function () {
        // Inizializza il pulsante di pagamento
        paypal.Buttons({
            createOrder: function (data, actions) {


                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: sessionStorage.getItem("CRED")
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    console.log('Pagamento completato per: ' + details.payer.name.given_name);
                    socket.send('')
                    socket.send('NUOVA SCHEDINA')
                    socket.send(amountValue)
                    socket.send(am)
                    
                });
            }
        }).render('#paypal-button-container'); // Renderizza il pulsante nel container con ID "paypal-button-container"
    };
}

