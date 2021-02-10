/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/


var a,b,c,d,e,f,g;
var maggiore=0;
var minore=0;

a = window.prompt("Numero a");
b = window.prompt("Numero b");
c = window.prompt("Numero c");
d = window.prompt("Numero d");
e = window.prompt("Numero e");
f = window.prompt("Numero f");
g = window.prompt("Numero g");


if(a> maggiore){
  maggiore = a;
}
else{
  minore =a;
}

if(b> maggiore){
  maggiore = b;
}
else if(b<minore){
  minore =b;
}

if(c> maggiore){
  maggiore = c;
}
else if(c<minore){
  minore =c;
}

if(d> maggiore){
  maggiore = d;
}
else if(d<minore){
  minore =d;
}


if(e> maggiore){
  maggiore = e;
}
else if (e<minore){
  minore =e;
}


if(f> maggiore){
  maggiore = f;
}
else if (f>minore){
  minore =f;
}

if(g> maggiore){
  g = maggiore;
}
else if(g<minore){
  g =minore;
}


console.log("maggiore " + maggiore);
console.log("minore " + minore);


