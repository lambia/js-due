const num1 = parseInt(prompt("Inserisci il primo numero"));
const num2 = parseInt(prompt("Inserisci il secondo  numero"));

// if (isNaN(num1) || isNaN(num2)) {
//     document.getElementById("message").innerHTML = "Errore: i numeri non sono numeri";
// }

if ( !isFinite(num1) || !isFinite(num2) ) {
    document.getElementById("message").innerHTML = "Errore: i numeri non sono numeri";
} else if (num1 > num2) {
    document.getElementById("message").innerHTML = `Il primo numero (${num1}) è maggiore del secondo (${num2})`;
} else if (num2 > num1) {
    document.getElementById("message").innerHTML = `Il secondo numero (${num2}) è maggiore del primo (${num1})`;
} else if (num1 == num2) {
    document.getElementById("message").innerHTML = `I numeri sono uguali`;
} else {
    document.getElementById("message").innerHTML = `Errore nell'elaborazione`;
}

