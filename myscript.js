/* Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

//? ANALISI
// .1 Prendo l'elemento dal DOM
// .2 Preparo variabile nome utente
// .3 Preparo variabile cognome
// .4 Preparo variabile colore preferito
// .5 Creo variabile constante con valore di tipo stringa "21"
// .6 faccio generare la password
// .7 immetto nel DOM la password generata

// .1 Prendo l'elemento dal DOM
const password = document.getElementById("password");
// // console.log(password);

// .2 Preparo variabile nome utente
const userName = prompt("Come ti chiami?");
// // console.log(userName);

// .3 Preparo variabile cognome
const lastName = prompt("Qual è il tuo cognome?");
// // console.log(lastName);

// .4 Preparo variabile colore preferito
const favColor = prompt("Scrivi il colore che più ti piace :)");
// // console.log(favColor);

// .5 Creo variabile constante con valore di tipo stringa "21"
const fixedNumber = "21";
// // console.log(fixedNumber);
