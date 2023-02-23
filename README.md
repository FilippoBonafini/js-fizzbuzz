# Consegna:
#### Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
---
```
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
```
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
---
## BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
## BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
---
# Risoluzione:

1. un numero per essere multiplo di 3 deve dare resto 0 dividendolo per 3;
2. un numero per essere multiplo di 5 deve dare resto 0 dividendolo per 5;
3. un numero per essere multiplo sia di 3 che di 5 deve dare resto 0 dividendolo per l'mcm di 3 e 5 ossia 15;
4. per scrivere in console il risultato utilizziamo un ciclo for che si ripeta 100 volte ma all'interno bisogna specificare che:
    se il numero (i) diviso per 15 da resto 0 ci deve scrivere FizzBuzz;
    inseve se i diviso 3 da resto 0 deve scrivere Fizz;
    invece se i diviso 5 da resto 0 deve scrivere Buzz;
    altrimenti scrive i;
Utilizziamo questo ordine per dare priorità al FizzBuzz in quanto tutti i numeri che soddisfano la prima condizione soddisferanno anche le successive.
---
## Bonus