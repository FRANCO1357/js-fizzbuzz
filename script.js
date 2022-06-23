// 1. calcolare numeri da 1 a 100
// 2. individuare i numeri divisibili per 3
// 3. individuare i numeri divisibili per 5
// 4. individuare i numeri divisibili sia per 3 che per 5
// 5. individuare i numeri non divisibili per 3 e per 5
// 6. Stampare in console Fizz al posto dei numeri divisibili per 3
// 7. Stampare in console Buzz al posto dei numeri divisibili per 5
// 8. Stampare in console FizzBuzz al posto dei numeri divisibili sia per 3 che per 5
// 9. Stampare in console il numero se non è divisibile ne per 3 ne per 5


let number = '';

for (let i = 1; i <= 100; i++){
    number.innerText += + i;

    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0){
        console.log('Fizz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}