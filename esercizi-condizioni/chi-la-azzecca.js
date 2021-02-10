/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var giocatore1;
var giocatore2;
var random;
var diff1;

giocatore1 = window.prompt("Inserisci il numero per il giocatore 1");
giocatore2 = window.prompt("Inserisci il numero per il giocatore 2");

random=Math.floor(Math.random()*100)+1;

if(giocatore1==random) 
{ 
  console.log("Il giocatore 1 ha indovinato il numero");
}
else if(giocatore2==random){
  console.log("Il giocatore 2 ha indovinato il numero");
}
else{
  diff1 = giocatore1 - random;
  diff2 = giocatore2 - random;
}

if(diff1 > diff2){
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!")
}
else{
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!")
}
console.log(random);


