
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


function sese(asa) {
    var urlParams = new URLSearchParams(window.location.search);
    var z = urlParams.get('myVar');
    const datifr = {
        nome: asa,
        email: z
    };
      
    fetch('https://lying-adhesive-chef.glitch.me/salva-dati', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datifr),
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella richiesta al server');
    }
        return response.text();
    })
    .then(data => {
        console.log(data); // Dati salvati con successo
    })
    .catch(error => {
        console.error('Errore:', error);
    });
}


window.onload = function () {
    var info = document.getElementById("informazione"); // Inizializza l'elemento "informazione"

    initPayPal();  // Chiama la funzione per inizializzare PayPal dopo che l'input è stato inizializzato
};

var info = document.getElementById("informazione")

var lista = document.getElementById("lista");
var gabb = lista.innerHTML

var amountValue = info.value; // Recupera il valore dell'input
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
                            value: amountValue
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
                    sese(amountValue)
                    
                });
            }
        }).render('#paypal-button-container'); // Renderizza il pulsante nel container con ID "paypal-button-container"
    };
}

