const fs = require("fs");
const path = require("path")
const readLine = require('readline')
const getLastLine = require('../../file/fileTolls').getLastLine

const txt = path.join('pages', 'file', 'arquivo.txt')

export default (req, res) => {


   // criarArquivo();

    escrever(req.query.temperature);

    ler();

    res.status(200).json({ mensagem: 'recebido' })
}

const ler = () => {
    
       fs.readFile(txt, "utf8", function (err, data) {
        if (err) {
            return console.log("Erro ao ler arquivo");
        }
      
        //var jsonData = JSON.parse(data); // faz o parse para json
        /**
         Se precisar em array use:
         jsonData = Object.keys(jsonData);
        / */
        const minLineLength = 1
        getLastLine(txt, 1)
            .then((lastLine) => {
                console.log(lastLine)
            })
            .catch((err) => {
                console.error(err)
            })



    });
}

const escrever = (info) => {
    var obj = [];
    obj.push({ id: 1, temperature: info });
    var json = JSON.stringify(obj);


    if (typeof info !== "undefined") {

        fs.writeFile(txt, info + '\n', { enconding: 'utf-8', flag: 'a' }, function (err) {
            if (err) throw err;
            console.log('Arquivo .txt salvo!');
        });


        fs.writeFile(path.join('pages', 'file', 'temperatura.json'), json, { enconding: 'utf-8', flag: 'a' }, function (err) {
            if (err) throw err;
            console.log('Arquivo .json salvo!');
        });
    }
}

const criarArquivo = () => {

    const data = 'Testando a criação de arquivos';

    fs.stat(txt, function (err, stat) {
        if (err == null) {
            console.log('Arquivo já existente');
        } else if (err.code === 'ENOENT') {
            // file does not exist
            fs.writeFile(txt, data, (err) => {
                if (err) throw err;
                console.log('O arquivo txt foi criado!');
            });
        } else {
            console.log('Some other error: ', err.code);
        }
    });

    fs.stat(path.join('pages', 'file', 'temperatura.json'), function (err, stat) {
        if (err == null) {
            console.log('Arquivo já existente');
        } else if (err.code === 'ENOENT') {
            // file does not exist
            fs.writeFile(path.join('pages', 'file', 'temperatura.json'), data, (err) => {
                if (err) throw err;
                console.log('O arquivo json foi criado!');
            });
        } else {
            console.log('Some other error: ', err.code);
        }
    });
}