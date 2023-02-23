// VARIABILI PER SCRIVERE I NUMERI 
const ul = document.querySelector('ul.list');


// VARIABILE FINESTRA A SCOMPARSA
const displayInfo = document.querySelector('.info');
const randomNumberButton = document.querySelector('button.randomNumber')

// VARIABILE BOTTONE CHIUDI FINESTRA
const buttonClose = document.querySelector('.info .close');

// VARIABILE DOM SPAN
const DOMnumberSelected = document.querySelector('.info .numberSelected');

for (let i=1; i<101; i++) {
    const elementoLista = document.createElement('li');
    if(i % 15 === 0){
        console.log('FizzBuzz');
        elementoLista.innerHTML=("FizzBuzz");
        elementoLista.classList.add(`classFizzBuzz`);
        elementoLista.classList.add(`class-${i}`);
        ul.append(elementoLista);
    }
    else if (i % 3 === 0){
        console.log('Buzz');
        elementoLista.innerHTML=("Buzz");
        elementoLista.classList.add(`classBuzz`);
        elementoLista.classList.add(`class${i}`);
        ul.append(elementoLista);
    }
    else if(i % 5 === 0){
        console.log('Fizz');
        elementoLista.innerHTML=("Fizz");
        elementoLista.classList.add(`classFizz`);
        elementoLista.classList.add(`class${i}`);
        ul.append(elementoLista);
    }
    else{
        console.log(i);
        elementoLista.innerHTML=(i);
        elementoLista.classList.add(`class${i}`);
        ul.append(elementoLista);
    }
}   

buttonClose.addEventListener("click",
    function(){
        displayInfo.classList.add('hidden');
    }
)

randomNumberButton.addEventListener('click',
    function(){
        // MI CREO 1 NUMERO RANDOM DA 1 A 100
        const numberRandom = Math.floor(Math.random()*100);
        // CREO UNA STRINGA UGUALE ALLA CLASSE DEI NUMERI
        const numberSearch = 'class'+numberRandom;
        // IMPORTO LA CLASSE DEL NUMERO
        const numberClass = document.querySelector('.'+numberSearch);
        numberClass.classList.add('selected');
        DOMnumberSelected.innerHTML=("E' stato estratto il numero: "+numberRandom );

        // FACCIO COMPARIRE LA FINESTRELLA
        displayInfo.classList.remove('hidden');

    }
)