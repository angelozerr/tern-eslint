var util = require("./util");

exports['test issue3'] = function() {
  
  // Unknown argument => throw error widh Unknown identifier
  util.assertLint("import", {
          messages : [{
            "message" : "Parsing error: Illegal import declaration",
            "severity" : "error",
            "from" : 1,
            "to" : 2,            
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
