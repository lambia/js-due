let a = prompt("Inserisci una parola");
let b = prompt("Inserisci un'altra parola");

console.log("Parola A è lunga: ", a.length);
console.log("Parola B è lunga: ", b.length);

if(a.length > b.length) {
    document.getElementById("message").innerHTML = `${a} è più lunga di ${b}`;
} else if(b.length > a.length) {
    document.getElementById("message").innerHTML = `${b} è più lunga di ${a}`;
} else {
    document.getElementById("message").innerHTML = `${a} e ${b} sono entrambe di ${a.length} caratteri`;
}

console.log("DOPO IL BLOCCO IF/ELSE");