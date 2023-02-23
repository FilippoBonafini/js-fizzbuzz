const ul = document.querySelector('ul.list');

for (let i=1; i<101; i++) {
    const elementoLista = document.createElement('li');
    if(i % 15 === 0){
        console.log('FizzBuzz');
        elementoLista.innerHTML=("FizzBuzz");
        ul.append(elementoLista);
    }
    else if (i % 3 === 0){
        console.log('Buzz');
        elementoLista.innerHTML=("Buzz");
        ul.append(elementoLista);
    }
    else if(i % 5 === 0){
        console.log('Fizz');
        elementoLista.innerHTML=("Fizz");
        ul.append(elementoLista);
    }
    else{
        console.log(i);
        elementoLista.innerHTML=(i);
        ul.append(elementoLista);
    }
}   