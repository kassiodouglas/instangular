/**
 * Comando para criação de serviços
 */

var shell = require('shelljs');
var yargs = require('yargs');


const options = yargs.options({

  name: {
    alias: 'n',
    description: 'Nome do componente',
    type: 'string',
    demandOption: true
  },

  test: {
    alias: 't',
    description: 'Criar arquivo de teste',
    type: 'string',
    default: false
  }

}).argv;

const tests = (!options.test) ? '--skip-tests' : '';

const path = `services/${options.name}`


const command = `ng generate service ${path} ${tests}`;
const { stdout, stderr, code } = shell.exec(command);

if (code !== 0) {
  console.error('Erro ao executar o comando:', stderr);
}
