(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("eslint/lib/eslint"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "eslint/lib/eslint" ], mod);
  mod(tern, tern, eslint);
})(function(infer, tern, eslint) {
  "use strict";
  
  var defaultConfig = {
      "parser": "espree",
      "ecmaFeatures": {},
      "rules": {
          "no-alert": 0,
          "no-array-constructor": 0,
          "no-bitwise": 0,
          "no-caller": 0,
          "no-catch-shadow": 0,
          "no-class-assign": 0,
          "no-cond-assign": 2,
          "no-console": 2,
          "no-const-assign": 0,
          "no-constant-condition": 2,
          "no-continue": 0,
          "no-control-regex": 2,
          "no-debugger": 2,
          "no-delete-var": 2,
          "no-div-regex": 0,
          "no-dupe-class-members": 0,
          "no-dupe-keys": 2,
          "no-else-return": 0,
          "no-empty": 2,
          "no-empty-label": 0,
          "no-eq-null": 0,
          "no-eval": 0,
          "no-ex-assign": 2,
          "no-extend-native": 0,
          "no-extra-bind": 0,
          "no-extra-boolean-cast": 2,
          "no-extra-parens": 0,
          "no-extra-semi": 2,
          "no-fallthrough": 2,
          "no-floating-decimal": 0,
          "no-func-assign": 2,
          "no-implicit-coercion": 0,
          "no-implied-eval": 0,
          "no-inline-comments": 0,
          "no-inner-declarations": [2, "functions"],
          "no-invalid-regexp": 2,
          "no-invalid-this": 0,
          "no-irregular-whitespace": 2,
          "no-iterator": 0,
          "no-label-var": 0,
          "no-labels": 0,
          "no-lone-blocks": 0,
          "no-lonely-if": 0,
          "no-loop-func": 0,
          "no-mixed-requires": [0, false],
          "no-mixed-spaces-and-tabs": [2, false],
          "linebreak-style": [0, "unix"],
          "no-multi-spaces": 0,
          "no-multi-str": 0,
          "no-multiple-empty-lines": [0, {"max": 2}],
          "no-native-reassign": 0,
          "no-negated-condition": 0,
          "no-negated-in-lhs": 2,
          "no-nested-ternary": 0,
          "no-new": 0,
          "no-new-func": 0,
          "no-new-object": 0,
          "no-new-require": 0,
          "no-new-wrappers": 0,
          "no-obj-calls": 2,
          "no-octal": 2,
          "no-octal-escape": 0,
          "no-param-reassign": 0,
          "no-path-concat": 0,
          "no-plusplus": 0,
          "no-process-env": 0,
          "no-process-exit": 0,
          "no-proto": 0,
          "no-redeclare": 2,
          "no-regex-spaces": 2,
          "no-restricted-modules": 0,
          "no-restricted-syntax": 0,
          "no-return-assign": 0,
          "no-script-url": 0,
          "no-self-compare": 0,
          "no-sequences": 0,
          "no-shadow": 0,
          "no-shadow-restricted-names": 0,
          "no-spaced-func": 0,
          "no-sparse-arrays": 2,
          "no-sync": 0,
          "no-ternary": 0,
          "no-trailing-spaces": 0,
          "no-this-before-super": 0,
          "no-throw-literal": 0,
          "no-undef": 2,
          "no-undef-init": 0,
          "no-undefined": 0,
          "no-unexpected-multiline": 0,
          "no-underscore-dangle": 0,
          "no-unneeded-ternary": 0,
          "no-unreachable": 2,
          "no-unused-expressions": 0,
          "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
          "no-use-before-define": 0,
          "no-useless-call": 0,
          "no-useless-concat": 0,
          "no-void": 0,
          "no-var": 0,
          "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
          "no-with": 0,

          "array-bracket-spacing": [0, "never"],
          "arrow-parens": 0,
          "arrow-spacing": 0,
          "accessor-pairs": 0,
          "block-scoped-var": 0,
          "block-spacing": 0,
          "brace-style": [0, "1tbs"],
          "callback-return": 0,
          "camelcase": 0,
          "comma-spacing": 0,
          "comma-style": 0,
          "complexity": [0, 11],
          "computed-property-spacing": [0, "never"],
          "consistent-return": 0,
          "consistent-this": [0, "that"],
          "constructor-super": 0,
          "curly": [0, "all"],
          "default-case": 0,
          "dot-location": 0,
          "dot-notation": [0, { "allowKeywords": true }],
          "eol-last": 0,
          "eqeqeq": 0,
          "func-names": 0,
          "func-style": [0, "declaration"],
          "generator-star-spacing": 0,
          "global-require": 0,
          "guard-for-in": 0,
          "handle-callback-err": 0,
          "id-length": 0,
          "indent": 0,
          "init-declarations": 0,
          "jsx-quotes": [0, "prefer-double"],
          "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
          "lines-around-comment": 0,
          "max-depth": [0, 4],
          "max-len": [0, 80, 4],
          "max-nested-callbacks": [0, 2],
          "max-params": [0, 3],
          "max-statements": [0, 10],
          "new-cap": 0,
          "new-parens": 0,
          "newline-after-var": 0,
          "object-curly-spacing": [0, "never"],
          "object-shorthand": 0,
          "one-var": [0, "always"],
          "operator-assignment": [0, "always"],
          "operator-linebreak": 0,
          "padded-blocks": 0,
          "prefer-arrow-callback": 0,
          "prefer-const": 0,
          "prefer-spread": 0,
          "prefer-reflect": 0,
          "prefer-template": 0,
          "quote-props": 0,
          "quotes": [0, "double"],
          "radix": 0,
          "id-match": 0,
          "require-jsdoc": 0,
          "require-yield": 0,
          "semi": 0,
          "semi-spacing": [0, {"before": false, "after": true}],
          "sort-vars": 0,
          "space-after-keywords": [0, "always"],
          "space-before-keywords": [0, "always"],
          "space-before-blocks": [0, "always"],
          "space-before-function-paren": [0, "always"],
          "space-in-parens": [0, "never"],
          "space-infix-ops": 0,
          "space-return-throw-case": 0,
          "space-unary-ops": [0, { "words": true, "nonwords": false }],
          "spaced-comment": 0,
          "strict": 0,
          "use-isnan": 2,
          "valid-jsdoc": 0,
          "valid-typeof": 2,
          "vars-on-top": 0,
          "wrap-iife": 0,
          "wrap-regex": 0,
          "yoda": [0, "never"]
      }
  }
  
  var eslintConfig = null;
  eslintConfig = require("eslint/lib/config");
  
  tern.registerPlugin("eslint", function(server, options) {
    server.mod.eslint = {
      config: options.config,
      configFile: options.configFile,
    }
  });
  
  function validate(server, query, file, messages) {

    function getPos(error, from) {
      var node = error.node;
      if (node && node.range) {
        return from ? node.range[0] : node.range[1];
      }      
      var line = error.line-1, ch = from ? error.column - 2 : error.column - 1;
      if (error.node && error.node.loc) {
        line = from ? error.node.loc.start.line -1 : error.node.loc.end.line -1;
        ch = from ? error.node.loc.start.column : error.node.loc.end.column;
      }
      // adjust ch
      if (from) {
        if (ch < 1) ch = 0;
        else if (ch >= file.text.length) ch = file.text.length - 1; 
      } else {
        if (ch < 2) ch = 1;
        else if (ch >= file.text.length) ch = file.text.length;
      }        
      return tern.resolvePos(file, {line: line, ch: ch});
    }
        
    function normPath(name) { return name.replace(/\\/g, "/"); }
    
    function loadConfig(file) {
      var filePath = normPath(server.options.projectDir) + "/" + normPath(file);
      defaultConfig.configFile = filePath;
      return new eslintConfig(defaultConfig).getConfig(filePath);
    }
    
    function getConfig() {
      var eslint = server.mod.eslint;
      if (eslint.config) return eslint.config;
      if (eslint.configFile) return loadConfig(eslint.configFile);
      return defaultConfig;
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
	  var from = getPos(message, true), to = getPos(message, false); 
	  var error = {
	    message: message.message,
	    severity: getSeverity(message),
	    from: tern.outputPos(query, file, from),
	    to: tern.outputPos(query, file, to)	      
	  }
	  if (!query.groupByFiles) error.file = file.name;
	  return error;
	}

	//clear all existing settings for a new file
	eslint.reset();

	var config = getConfig(), text = file.text;
	var errors = eslint.verify(text, config, file.name);
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