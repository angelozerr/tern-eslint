var util = require("./util");

exports['test issue3'] = function() {
  
  // Unknown argument => throw error with Unknown identifier
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

exports['test issue11'] = function() {
  
  // Unknown argument => throw error with Unknown identifier
  util.assertLint("var a = 10;\n a = 2;", {
          messages : [{
            "message" : "Expected indentation of 0 spaces but found 1.",
            "severity" : "warning",
            "from" : 12,
            "to" : 13,
            "lineNumber": 2,
            "id":"indent",
            "fix": {
              "from":12,
              "to":13,
              "text":""
            },
            "file":"test1.js"
          }]
  }, [ "browser" ], {"config": {"rules": {"indent": 1}}}); 
  
}

if (module == require.main) require('test').run(exports)
