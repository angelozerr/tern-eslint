(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("eslint/lib/eslint"), require("eslint/lib/util"), require("eslint/conf/eslint.json"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "eslint/lib/eslint", "eslint/lib/util", "eslint/conf/eslint.json" ], mod);
  mod(tern, tern, eslint, util, eslintConfig);
})(function(infer, tern, eslint, util, eslintConfig) {
  "use strict";

  tern.registerPlugin("eslint", function(server, options) {

  });

  function validate(server, query, file, messages) {

    function getPos(error, from) {
      /*var node = error.node;
      if (node && node.range) {
        return from ? node.range[0] : node.range[1];
      }
      var line = error.line-1, ch = from ? error.column -2 : error.column -1;
      if (error.node && error.node.loc) {
        line = from ? error.node.loc.start.line -1 : error.node.loc.end.line -1;
        ch = from ? error.node.loc.start.column : error.node.loc.end.column;
      }*/
      
      return tern.resolvePos(file, {line: line, ch: ch});
    }

    function getSeverity(error) {
      switch(error.severity) {
        case 1:
          return "warning";
        case 2:
          return "error";
        default:
          return "error";
      }
    }

		function makeError(message) {
			var fromTemp = (message.column !== null && message.column !== undefined)? message.column:1;
			console.log("From Temp:", fromTemp);
	  	var from = tern.resolvePos(file, {line: message.line-1, ch:fromTemp}), to = from+1;
	  	if((message.column !== null && message.column !== undefined)) {
		  	try {
		    	to = tern.resolvePos(file, {line: message.line-1, ch: message.column+message.source.length});
		  	} catch(e) {
		  	}
	  	}
		  //var from = getPos(message, true), to = getPos(message, false);
		  console.log("MESSAGE:", message, "\nFROM:",from,"\nTO:", to, "\nERROR NODE", message.node);
		  //var q = from.line ? {lineCharPositions: true} : {};
		  var error = {
		    message: message.message,
		    severity: getSeverity(message),
		    from: tern.outputPos(query, file, from),
		    to: tern.outputPos(query, file, to)
		  }
  	  if (query.lineNumber) error.lineNumber = message.line;
		  if (!query.groupByFiles) error.file = file.name;
		  return error;
		}

		//clear all existing settings for a new file
		eslint.reset();
	  var fs = require("fs");
	  var path = require("path");
	  var win = /win/.test(process.platform);
	  var resolve = path.resolve;

	  if (win) resolve = function(base, file) {
	    return path.resolve(base, file).replace(/\\/g, "/");
	  };
		var dir = server.options.projectDir || "";
		var config = eslintConfig;
		var cmp = null;
		try {
		  cmp = JSON.parse(fs.readFileSync(resolve(dir, ".eslintrc")));
		  config = util.mergeConfigs(eslintConfig, cmp);
		} catch (e) {
		  // Here you get the error when the file was not found,
		  // but you also get any other error
		  console.log("Error", e);
		}
		var text = file.text;
		var errors = eslint.verify(text, config, file.name);
		console.log("Errors", errors);
		for (var i = 0; i < errors.length; i++) {
		  messages.push(makeError(errors[i]));
		}
  }

  tern.defineQueryType("eslint", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var messages = [];
        validate(server, query, file, messages);
        return {messages: messages};
      } catch(err) {
        console.error(err.stack);
        return {messages: []};
      }
    }
  });

  tern.defineQueryType("eslint-full", {
    run: function(server, query) {
      try {
        var messages = [], files = server.files, groupByFiles = query.groupByFiles == true;
        for (var i = 0; i < files.length; ++i) {
          var messagesFile = groupByFiles ? [] : messages, file = files[i];
          validate(server, query, file, messagesFile);
          if (groupByFiles) messages.push({file:file.name, messages: messagesFile});
        }
        return {messages: messages};
      } catch(err) {
        console.error(err.stack);
        return {messages: []};
      }
    }
  });

});
