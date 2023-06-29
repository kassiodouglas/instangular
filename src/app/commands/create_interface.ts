/**
 * Comando para criação de interfaces
 */

var shell = require('shelljs');
var yargs = require('yargs');


const options = yargs.options({

  name: {
    alias: 'n',
    description: 'Nome do componente',
    type: 'string',
    demandOption: true
  }

}).argv;

const path = `interfaces/${options.name}`


const command = `ng generate interface  ${path}`;
const { stdout, stderr, code } = shell.exec(command);

if (code !== 0) {
  console.error('Erro ao executar o comando:', stderr);
}
