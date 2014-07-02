var traceur = require('traceur');
traceur.require.makeDefault(function(filename) {
  // don't transpile our dependencies, just our app
  return filename.indexOf('node_modules') === -1;
});


import {Lexer} from './Lexer';
module tokens from './tokenClasses';
import tokenDefault from './tokenClasses';
import {SPACE} from './tokenClasses';

console.log(new Lexer().tokens('\n\n\n\n').next());
console.log('Newline', tokens.NEWLINE, 'end');
console.log('tokenDefault', tokenDefault);
console.log('SPACE', SPACE, '||');

