//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//1 chiedere n km
var km = parseInt(prompt("Quanti km devi fare?")); 
//2 chiedere eta
var eta = parseInt(prompt("Quanti anni hai?")); 
//3 n km * 0.21 = prezzo tot
var prezzoTot = km * 0.21;
//4 prezzo totale - 20 / 40 / nulla a seconda dell' eta arrotondato
if (eta < 18){
    prezzoTot = (prezzoTot / 100 * 80).toFixed(2);
}  else if (eta > 65) {
    prezzoTot = (prezzoTot / 100 * 60).toFixed(2);
}

document.getElementById('costototale').innerHTML += prezzoTot + " €";