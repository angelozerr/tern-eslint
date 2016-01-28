var util = require("./util");

exports['test issue3'] = function() {
  
  // Unknown argument => throw error with Unknown identifier
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

exports['test issue11'] = function() {
  
  // Unknown argument => throw error with Unknown identifier
  util.assertLint("var a = 10;\n a = 2;", {
          messages : [{
            "message" : "Expected indentation of 0 space characters but found 1.",
            "severity" : "warning",
            "from" : 13,
            "to" : 19,
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
