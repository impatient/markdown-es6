require('traceur');
require('source-map-support').install();

import primaryTokens from './tokenClasses';

class Lexer {
 constructor(){
    console.log('Lexer constructor');
  }
  *tokens(input) {
    var all = input;
    while(all.length > 0) {
      var key, value,matched;
      matched = Object.keys(primaryTokens).find((currentKey) => {
        var match = primaryTokens[currentKey].exec(all);
        if(match) {
          key = currentKey;
          value = match[0];
          return true;
        }

      });
      if(matched) {
        all = all.substring(value.length);

      }
      else {
        key = 'unknown';
        value = all[0];
        all = all.substring(1);
      }
      yield {key, value };

    }
    return all[0];
  }


}

export  {Lexer};