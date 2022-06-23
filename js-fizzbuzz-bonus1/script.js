// 1. calcolare numeri da 1 a 100
// 2. individuare i numeri divisibili per 3
// 3. individuare i numeri divisibili per 5
// 4. individuare i numeri divisibili sia per 3 che per 5
// 5. individuare i numeri non divisibili per 3 e per 5
// 6. Stampare in console Fizz al posto dei numeri divisibili per 3
// 7. Stampare in console Buzz al posto dei numeri divisibili per 5
// 8. Stampare in console FizzBuzz al posto dei numeri divisibili sia per 3 che per 5
// 9. Stampare in console il numero se non è divisibile ne per 3 ne per 5

const container = document.getElementById('container');
let listOfNumber = '<div class="row">'

let number = '';

for (let i = 1; i <= 100; i++){
    number.innerText += + i;

    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        listOfNumber += `<div class="col"><div class="card fizzbuzz">FizzBuzz</div></div>`
    } else if (i % 3 == 0){
        console.log('Fizz');
        listOfNumber += `<div class="col"><div class="card fizz">Fizz</div></div>`
    } else if (i % 5 == 0){
        console.log('Buzz');
        listOfNumber += `<div class="col"><div class="card buzz">Buzz</div></div>`
    } else {
        console.log(i);
        listOfNumber += `<div class="col"><div class="card number">${i}</div></div>`
    }
}

listOfNumber += '</div>'

container.innerHTML = listOfNumber;