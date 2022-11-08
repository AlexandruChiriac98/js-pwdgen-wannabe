const Nome = prompt("Inserisci Nome")
const Cognome = prompt("Inserisci Cognome")
const ColorePreferito = prompt("Inserisci Colore Preferito")

let Password = Nome + Cognome + ColorePreferito + 21;
console.log(Password)

const h2Pass = document.getElementById("Pass")
h2Pass.innerHTML = Password
