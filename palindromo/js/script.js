//chiedo all'utente un input
var parola = prompt('inserisci la parola')

console.log(palindromo(parola))

//creo la funzione

function palindromo(str) {
  
  //calcolo la lunghezza della stringa e divido la parola a metà 

  var lunghezza = str.length;
  var meta = Math.floor(lunghezza/2);

  //ciclo for per confrontare la corrispondenza delle lettere

  for ( var i = 0; i < meta; i++ ) {
      if (lunghezza[i] !== str[lunghezza - 1 - i]) {
        console.log('la parola non è un palindromo') 
        return false;
      }
  }
  console.log('la parola è un palindromo')
  return true;
}