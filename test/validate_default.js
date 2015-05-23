var util = require("./util");

exports['test Invalid Argument'] = function() {
  
  // Unknown argument => throw error widh Unknown identifier
  util.assertLint("var arr;", {
          messages : [{
            "message" : "Newline required at end of file but not found.",
            "severity" : "error",
            "from" : -1,
            "to" : 0,            
            "file": "test1.js"},
            {
              "message" : "arr is defined but never used",
              "severity" : "error",
              "from" : 2,
              "to" : 3,              
              "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
