/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n=15; //numero lanci
var i=0;
var somma1;
var somma2;

somma1 += Math.floor(Math.random()*6)+1;
console.log(somma1,somma2);
for(i;i<=n;i++) {
  
  somma2 += Math.floor(Math.random()*6)+1;
  
}

if(somma1 > somma2){
  console.log("il giocatore 1 vinto totalizzando " + somma1 + " punti");
}
else{
  console.log("il giocatore 2 vinto totalizzando " + somma2 + " punti");
}


