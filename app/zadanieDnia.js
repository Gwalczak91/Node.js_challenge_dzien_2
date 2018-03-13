//Twój kod

const fs = require('fs');


fs.readFile(`${process.argv[2]}`, 'utf8', (err, data) => {
    if (err === null){

        function alternativeCase(data){
            let output = "";
            for(let i = 0; i < data.length; i++){
                if (i % 2 != 0) {
                    output += data[i].toUpperCase();
                }
                else {
                    output += data[i].toLowerCase();
                }
            }
            return console.log(output);
        }
        alternativeCase(data)

} else {
    console.log('Błąd podczas odczytu pliku!', err);
}
});