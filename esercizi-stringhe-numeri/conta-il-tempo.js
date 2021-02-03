/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var secondi = 12560;
var ore;
var minuti;
var secondiR


ore = secondi/3600;
minuti = ((secondi%3600)/60);
secondiR=secondi%60;



console.log(Math.floor(ore)+ " Ore, " + Math.floor(minuti) + " Minuti, " + secondiR + " Secondi.");

