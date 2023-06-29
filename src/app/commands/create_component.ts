/**
 * Comando para criação de componentes internos na estrutura kass
 */

var shell = require('shelljs');
var yargs = require('yargs');


const options = yargs.options({

  local: {
    alias: 'l',
    description: 'Local onde será criado o novo componente. Todos por padão ficam dentro de "resources"',
    type: 'string',
    demandOption: true
  },

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

const path = `resources/${options.local}/${options.name}`


const command = `ng generate component ${path} ${tests}`;
const { stdout, stderr, code } = shell.exec(command);

if (code !== 0) {
  console.error('Erro ao executar o comando:', stderr);
} else {
  console.log('Saída do comando:', stdout);
}
