var util = require("./util");

exports['test never used'] = function() {
  
  // never used
  util.assertLint("var arr;", {
          messages : [{
            "message" : "\"arr\" is defined but never used",
            "severity" : "error",
            "from" : 4,
            "to" : 7,
            "lineNumber": 1,
            "id": "no-unused-vars",
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

exports['test var'] = function() {
  
  util.assertLint("var", {
          messages : [{
            "message" : "Parsing error: Unexpected end of input",
            "severity" : "error",
            "from" : 2,
            "to" : 3,
            "lineNumber": 1,
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

exports['test import'] = function() {
  
  // never used
  util.assertLint("import", {
          messages : [{
            "message" : "Parsing error: Illegal import declaration",
            "severity" : "error",
            "from" : 1,
            "to" : 2,
            "lineNumber": 1,
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
