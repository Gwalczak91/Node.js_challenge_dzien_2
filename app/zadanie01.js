//Twój kod


const fs = require('fs');

fs.readFile("./data/zadanie01/input.json", "utf8", (err, data) => {
    if(err === null){
        let arr = JSON.parse(data);
        console.log(arr);
        let sum = arr.reduce((prev, curr) => {
            return prev + curr
        },0);

        console.log(sum);
        fs.writeFile("./data/zadanie01/sum.txt", sum, err => {
            if (err === null){
            console.log('Zapisano poprawnie!');
            } else {
            console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    }else {
        console.log(err);
    }
});