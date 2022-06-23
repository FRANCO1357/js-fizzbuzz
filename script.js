// 1. calcolare numeri da 1 a 100
// 2. individuare i numeri divisibili per 3 e per 5
// 3. individuare i numeri divisibili sia per 3 che per 5
// 4. dare a questi numeri classi diverse
// 5. dare alle classi colori diversi
// 6. stampare i numeri in console

const row = document.getElementById('row');
let listOfNumber = '<ul>';


for (let i = 1; i <= 100; i++){
    console.log(i);
    row.innerHTML += `<li>${i}</li>`;

    if (i % 3 == 0 && i % 5 == 0){
        row.innerText += 'red';
    } else if (i % 3 == 0){
        row.innerText += 'green';
    } else if (i % 5 == 0){
        row.innerText += 'blue';
    }
}

listOfNumber = '</ul>';

row.innerHTML = listOfNumber;