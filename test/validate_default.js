var util = require("./util");

exports['test never used'] = function() {
  
  // never used
  util.assertLint("var arr;", {
          messages : [{
            "message" : "'arr' is defined but never used.",
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
            "message" : "Parsing error: Unexpected token",
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
            "message" : "Parsing error: The keyword 'import' is reserved",
            "severity" : "error",
            "from" : 0,
            "to" : 1,
            "lineNumber": 1,
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

exports['test eslint-recommended v3.0'] = function () {

  // require-yield was added to eslint-recommended in v3.0
  util.assertLint("/*eslint-env es6*/ (function* foo() { return 10; })()", {
          messages : [{
            "message" : "This generator function does not have 'yield'.",
            "severity" : "error",
            "from" : 20,
            "to" : 50,
            "lineNumber" : 1,
            "id" : "require-yield",
            "file" : "test1.js"}
          ]
  }, [ "browser" ]);

  }

exports['test eslint-recommended v4.0'] = function () {

  // no-useless-escape was added to eslint-recommended in v4.0
  util.assertLint("'\\#';", {
          messages : [{
            "message" : "Unnecessary escape character: \\#.",
            "severity" : "error",
            "from" : 1,
            "to" : 2,
            "lineNumber" : 1,
            "id" : "no-useless-escape",
            "file" : "test1.js"}
          ]
  }, [ "browser" ]);

  }
if (module == require.main) require('test').run(exports)
