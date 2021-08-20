const fs = require("fs");
const path = require("path")
const readLine = require('readline')
const getLastLine = require('../file/fileTolls').getLastLine

const txt = path.join('pages', 'file', 'arquivo.txt')

export default async (req, res) => {

    fs.readFile(txt, "utf8", function (err, data) {
        if (err) {
            return console.log("Erro ao ler arquivo");
        }

        const minLineLength = 1
        getLastLine(txt, 1)
            .then((lastLine) => {
                const float = parseFloat(lastLine)/1000
                const resultado = float.toFixed(2)
                //return lastLine
                //splitStr(float, '.')
               
                res.status(200).json(resultado)
            })
            .catch((err) => {
                console.error(err)
            })

    });

}

function splitStr(str, separator) {

    // Function to split string
    var string = str.split(separator);

    console.log(string);
}