
export var NEWLINE = new RegExp(/(\n+)/);
export var SPACE = new RegExp(/([^\n][\s\t]+)/);
export var WORD = new RegExp(/(\w+)/);
export var PUNCT = new RegExp(/([\^\[\]\!\*\+\-`#])/);

export default {SPACE, NEWLINE, WORD,PUNCT};
