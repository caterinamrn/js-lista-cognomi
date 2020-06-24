var lista = ["Alberti","Zanier", "Treccani", "Biancato", "Valsi", "Manin"];
var cognomeUtente = prompt("Inserire il proprio cognome");

  lista.push(cognomeUtente);
// versione con sort
  lista.sort();
  console.log(lista);

for (var i = 0; i < lista.length; i++) {
  if (cognomeUtente == lista[i]) {
    console.log("la posizione del cognome dell'utente è: ",i);
  }
}
