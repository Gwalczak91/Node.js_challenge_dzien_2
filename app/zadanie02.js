//Twój kod


const fs = require('fs');


fs.readdir('./data/zadanie02', (err, files) => {
        if (err === null){
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
            if (err === null){
            console.log('Poprawnie odczytano plik.', data);
            } else {
            console.log('Błąd podczas odczytu pliku!', err);
            }
        });
    });
} else {
    console.log('Błąd podczas listowania katalogu!', err);
}
});