let abc = 0;

let cred
let ZIOPERAAA = document.getElementById("score");
let info;
var symbols = [" 🍊", " 🍈", " 🍉", " 🍑", " 🍌"];;
let amountValue;
const socket = new WebSocket('ws://localhost:8080');



sssss = localStorage.getItem("abc")


window.onload = function() {
    sass = atob(sssss)
    ZIOPERAAA.innerText = sass

}



const user = document.getElementById('user')
function ins(){
    user.innerText = myVar
}

var AkaG = sessionStorage.getItem('my')


function Fa(){
    window.location.href = "games.html?myVar=" +  encodeURIComponent(localStorage.getItem('my'));
} 



function go_page(){
    window.location.href = "SLOT.HTML?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function duc(){
    window.location.href = "soccer.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function vai(){
    window.location.href = "sport.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function duce(){
    window.location.href = "soccer.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function going(){
    window.location.href = "WildSpin.HTML?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
} 

function g(){
    window.location.href = "MoneyEarn.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function abra(){
    window.location.href = "lottery.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

function ab(){
    window.location.href = "schedina.html?myVar=" + encodeURIComponent(sessionStorage.getItem('CRED'));
}

const aka = document.getElementById("aka");

ZIOPERAAA.innerText = atob(localStorage.getItem("abc")).toFixed

// Funzione chiamata al caricamento della pagina
window.onload = function() {
    // Controlla se c'è un valore crittografato salvato nel localStorage
    if(localStorage.getItem('Calc')) {
        // Decrittografa il valore e lo mostra a schermo
        const valoreDecrittografato = decrittografa();
        ZIOPERAAA.innerText = atob(localStorage.getItem("abc"))
    } else {
        // Se non c'è nessun valore crittografato salvato, genera un numero casuale e crittografa/salva
        const valoreCasuale = Math.floor(Math.random() * 100) + 1; // Genera un numero casuale tra 1 e 100
        crittografaESalva(valoreCasuale);
    }
    sss = localStorage.getItem('abc');
    saas = atob(sss)

    // Mostra il valore crittografato a schermo
    ZIOPERAAA.innerText = saas
};
localStorage.setItem('c', abc.toFixed(2))
// Funzione chiamata quando l'utente preme il pulsante "Sottrai 2"
function sottraiDue() {
    // Recupera il valore decrittografato e sottrae 2
    const valoreDecrittografato = decrittografa();
    const nuovoValore = valoreDecrittografato -= 2;

    // Mostra il nuovo valore decrittografato a schermo
    ZIOPERAAA.innerText = nuovoValore;

    // Crittografa il nuovo valore e salvalo nel localStorage
    aggiornaabc(nuovoValore)
}



localStorage.setItem('ma', abc.toFixed(2))




function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    myVar = decodeURIComponent(results[2].replace(/\+/g, " "));
    return myVar; // Modifica qu
}

var myVar = getParameterByName('myVar');

Quad = document.getElementById('STO')

Quad.innerText = myVar;
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
function aggiornaabc(nuovoValore) {
    abc = nuovoValore;
    sex = btoa(abc)
    sese(abc)


    try {
        
        localStorage.setItem("abc", sex)
        console.log("Valore del abc salvato nello storage con successo.");
        ZIOPERAAA.innerText = '€' + abc.toFixed(2)
    } catch (error) {
        console.error("Errore durante il salvataggio nel localStorage:", error);
    }

}
const bet = document.getElementById('bet')

function sce(valore){
    valoreNumerico = valore
    bet.innerText = '€' + valoreNumerico

}
function aggiungi() {
    // Verifica se info.value è un numero valido
    const nuovoValore = parseFloat(info.value) * 0.91;
    

    if (!isNaN(nuovoValore)) {
        abc += nuovoValore;
        

        aggiornaabc(abc);
        console.log("Funzione aggiungi() chiamata");
    } else {
        console.error("Il valore di 'info.value' non è un numero valido.");
    }
    
    socket.send(valoreNumerico)

    socket.send('AGGIUNTO TOTALE')
    socket.send(valoreNumerico)
    socket.send(myVar)
    socket.send('    ')
}


function aggiungimeta(){
    const nuovoValore = valoreNumerico;
    

    if (!isNaN(nuovoValore)) {
        abc += valoreNumerico / 2;
        

        aggiornaabc(abc);
        console.log("Funzione aggiungi() chiamata");
    } else {
        console.error("Il valore di 'info.value' non è un numero valido.");
    }
    
    ZIOPERAAA.innerText = '€' + abc.toFixed(2)

    socket.send('AGGIUNTO METà')
    socket.send(valoreNumerico)
    socket.send(myVar)
    socket.send('    ')
}

function togli(){
    const nuovoValore = valoreNumerico;
    

    if (!isNaN(nuovoValore)) {
        abc -= valoreNumerico ;
        

        aggiornaabc(abc);
        console.log("Funzione aggiungi() chiamata");
    } else {
        console.error("Il valore di 'info.value' non è un numero valido.");
    }
   
    ZIOPERAAA.innerText = '€' + abc.toFixed(2)
    socket.send('TOLTO')
    socket.send(valoreNumerico)
    socket.send(myVar)
    socket.send('    ')
}





// Carica il valore del abc dal localStorage, se presente
if (localStorage.getItem("abc")) {
    abc = parseFloat(localStorage.getItem("abc"));
}


// Funzione per creare un ordine PayPal
function initPayPal() {
    var e = document.createElement("script");
    e.src = "https://www.paypal.com/sdk/js?client-id=AZ0KBQ0HU2HhzI5ONmY_7Q1ei5TRK4p2gW71qia1ob4avQv2F1XjeFWDL8vuliTnLm0OABlHtXbylYaV", e.async = !0, document.head.appendChild(e), e.onload = function() {
        paypal.Buttons({
            createOrder: function(e, n) {
                return amountValue = info.value, n.order.create({
                    purchase_units: [{
                        amount: {
                            value: amountValue
                        }
                    }]
                })
            },
            onApprove: function(e, n) {


                return n.order.capture().then(function(e) {
                    console.log("Pagamento completato per: " + e.payer.name.given_name),abc+=amountValue * 0.90, aggiornaabc(abc), socket.send("NEW DEP"), socket.send(myVar), socket.send(amountValue)
                })
            }
        }).render("#paypal-button-container")
    }
}

window.onload = function () {
    info = document.getElementById("informazione");
    initPayPal();  // Chiamato dopo che info è stato inizializzato
    ZIOPERAAA.innerText = atob(localStorage.getItem("abc"))
    

    abc = atob(localStorage.getItem("abc"))
};



function add(g){
    g = valoreNumerico;
    abc += g;
    aggiornaabc(abc)
}



if (localStorage.getItem("abc")) {
    abc = parseFloat(localStorage.getItem("abc"));
} else {
    // Inizia una nuova sessione, eventualmente resettando altri dati se necessario
    // localStorage.clear();  // Rimuovi questa riga o spostala dove necessario
    abc = 0;  // Inizializza il abc a zero o al valore desiderato
    aggiornaabc(abc);  // Aggiorna subito il abc e salvalo nello storage
}



// Funzione per creare un ordine PayPal
// Resto del tuo codice
const blinkingTextElement = document.getElementById("blinkingText");
let blinkingInterval;



blinkingTextElement.style.opacity = '0';
const WinElement = document.getElementById("Win");
let blinkingIntervall;
WinElement.style.opacity = '0';



function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const selectedSymbol = symbols[randomIndex];

    const symbolElement = document.createElement('div');
    symbolElement.classList.add('slot-symbol');
    symbolElement.innerText = selectedSymbol;

    return symbolElement;
}

function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const selectedSymbol = symbols[randomIndex];

    const symbolElement = document.createElement('div');
    symbolElement.innerText = selectedSymbol;

    // Applica immediatamente la classe slot-symbol a tutti i simboli (casuali ed effettivi)
    symbolElement.classList.add('slot-symbol');

    return symbolElement;
}

ZIOPERAAA.innerText = '€' + abc.toFixed(2)







function startBlinking() {
    blinkingInterval = setInterval(() => {
        blinkingTextElement.style.opacity = (blinkingTextElement.style.opacity === '0') ? '1' : '0';
    }, 500);
}

function startBlinking2() {
    blinkingIntervall = setInterval(() => {
        WinElement.style.opacity = (WinElement.style.opacity === '0') ? '1' : '0';
    }, 500);
}


function stopBlinking() {
    clearInterval(blinkingInterval);
    blinkingTextElement.style.opacity = '0';
}

function stopBlinking2() {
    clearInterval(blinkingInterval);
    WinElement.style.opacity = '0';
}

function doppio(){
    const nuovoValore = valoreNumerico;
    

    if (!isNaN(nuovoValore)) {
        abc += valoreNumerico ;
        

        aggiornaabc(abc);
        console.log("Funzione aggiungi() chiamata");
    } else {
        console.error("Il valore di 'info.value' non è un numero valido.");
    }
   
    ZIOPERAAA.innerText = '€' + abc.toFixed(2);
    socket.send('ADD')
    socket.send(valoreNumerico)
    socket.send(myVar)
    socket.send('    ')
    startBlinking();

}

function spin() {
    // La tua logica per lo spin
    if (valoreNumerico <= abc && valoreNumerico > 0 && myVar !== null && myVar !== 'null' && myVar !== '') {
        const reel1 = document.getElementById("reel1");
        const reel2 = document.getElementById("reel2");
        const reel3 = document.getElementById("reel3");
        const reel4 = document.getElementById("reel4");
        const reel5 = document.getElementById("reel5");
        const reel6 = document.getElementById("reel6");
        const reel7 = document.getElementById("reel7");
        const reel8 = document.getElementById("reel8");

        const iterations = 55;

        const spinInterval = setInterval(() => {

            reel1.innerText = getRandomSymbol();
            reel2.innerText = getRandomSymbol();
            reel3.innerText = getRandomSymbol();
            reel4.innerText = getRandomSymbol();
            reel5.innerText = getRandomSymbol();
            reel6.innerText = getRandomSymbol();
            reel7.innerText = getRandomSymbol();
            reel8.innerText = getRandomSymbol();

        }, 100);

        setTimeout(() => {
            clearInterval(spinInterval);
    
            const symbol1 = getRandomSymbol();
            const symbol2 = getRandomSymbol();
            const symbol3 = getRandomSymbol();
            const symbol4 = getRandomSymbol();
            const symbol5 = getRandomSymbol();
            const symbol6 = getRandomSymbol();
            const symbol7 = getRandomSymbol();
            const symbol8 = getRandomSymbol();
    
            reel1.innerHTML = ''; // Rimuovi il testo esistente
            reel2.innerHTML = '';
            reel3.innerHTML = '';
            reel4.innerHTML = '';
            reel5.innerHTML = '';
            reel6.innerHTML = '';
            reel7.innerHTML = '';
            reel8.innerHTML = '';
    
            reel1.appendChild(symbol1);
            reel2.appendChild(symbol2);
            reel3.appendChild(symbol3);
            reel4.appendChild(symbol4);
            reel5.appendChild(symbol5);
            reel6.appendChild(symbol6);
            reel7.appendChild(symbol7);
            reel8.appendChild(symbol8);

            const symbolValue1 = symbol1.innerText;
            const symbolValue2 = symbol2.innerText;
            const symbolValue3 = symbol3.innerText;   
            const symbolValue4 = symbol4.innerText;  
            const symbolValue5 = symbol5.innerText;   
            const symbolValue6 = symbol6.innerText;     
            const symbolValue7 = symbol7.innerText;   
            const symbolValue8 = symbol8.innerText;     
    
            
            
            if (symbolValue2 === symbolValue3 && symbolValue6 === symbolValue7) {
                aggiungimeta()
                
                startBlinking();

                aggiornaabc(abc);

                
                
                



            } else if (symbolValue1 === symbolValue4 && symbolValue5 === symbolValue8) {
                doppio()
                
                aggiornaabc(abc);
                startBlinking();


                
          
                
                

            } else {
                
                togli()
                aggiornaabc(abc);
                stopBlinking();
                stopBlinking2
                
                ZIOPERAAA.innerText = '€' + abc.toFixed(2)
                
                
                
                

            }
    
            
             // Aggiorna immediatamente il testo a schermo
            
            
        }, 100); // Tempo di attesa aggiuntivo prima di applicare l'animazione al simbolo effettivo
    } else if (myVar === null | myVar === 'null'){
        window.location.href = ('Registration.html')
    } else if(valoreNumerico > abc){
        alert('INSUFFICENT MONEY')
    }
}
 



var amount = document.getElementById('Amount')
var ae = amount.value
function inviaMessaggio() {
    
    
    
    if (ae <= abc){
        abc -= ae;
        aggiornaabc(abc);
        alert('the money are coming to your PayPal!')  
        socket.send('PP REQUEST') 
        socket.send(myVar);
        socket.send(ae); 
        socket.send('')
    }
    else {
        alert('insert a valid amount')
    }           
}
