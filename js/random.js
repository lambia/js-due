let scelta = prompt("Pari o dispari?", "pari");

if(scelta != "pari" && scelta != "dispari") {
    alert("Errore. Abbiamo scelto per te: punterai sui pari");
    scelta = "pari";
}

const num1 = parseInt(prompt("Insierisci il primo numero (tra 1 e 9)"));

const num2 = Math.floor( Math.random() * 9) +1;

const somma = num1 + num2;

console.log(`L'utente ha puntato su ${scelta}. Il numero è ${somma} => [${num1},${num2}]`);


let risultato;

if( somma % 2 == 0 ) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

if(scelta == risultato) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}