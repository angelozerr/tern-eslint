(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("eslint/lib/linter"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "eslint/lib/eslint" ], mod);
  mod(tern, tern, eslint);
})(function(infer, tern, eslint) {
  "use strict";
  
  // copied from eslint/conf/eslint-recommended.js
  var defaultConfig = {
    parser: "espree",
    ecmaFeatures: {},

    rules: {

        /* eslint-enable sort-keys */
        "accessor-pairs": "off",
        "array-bracket-spacing": "off",
        "array-callback-return": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "block-scoped-var": "off",
        "block-spacing": "off",
        "brace-style": "off",
        "callback-return": "off",
        "camelcase": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "complexity": "off",
        "computed-property-spacing": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": "off",
        "default-case": "off",
        "dot-location": "off",
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": "off",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "generator-star-spacing": "off",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": "off",
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-ternary": "off",
        "new-cap": "off",
        "new-parens": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-caller": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-compare-neg-zero": "off",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "off",
        "no-ex-assign": "error",
        "no-extend-native": "off",
        "no-extra-bind": "off",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "off",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "off",
        "no-multiple-empty-lines": "off",
        "no-native-reassign": "off",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "off",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "off",
        "no-new-object": "off",
        "no-new-require": "off",
        "no-new-symbol": "error",
        "no-new-wrappers": "off",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "off",
        "no-param-reassign": "off",
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "off",
        "no-return-await": "off",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "off",
        "no-sequences": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "off",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "off",
        "no-trailing-spaces": "off",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "off",
        "no-unneeded-ternary": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "off",
        "no-useless-concat": "off",
        "no-useless-constructor": "off",
        "no-useless-escape": "off",
        "no-useless-rename": "off",
        "no-useless-return": "off",
        "no-var": "off",
        "no-void": "off",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "off",
        "no-with": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": ["off", "never"],
        "object-property-newline": "off",
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-promise-reject-errors": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": "off",
        "require-await": "off",
        "require-jsdoc": "off",
        "require-yield": "error",
        "rest-spread-spacing": "off",
        "semi": "off",
        "semi-spacing": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-unary-ops": "off",
        "spaced-comment": "off",
        "strict": "off",
        "symbol-description": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "off"
    }
  };

  function isEmpty( obj ) {for ( var prop in obj ) {return false;} return true;}
  
  function normPath(name) { return name.replace(/\\/g, "/"); }
  
  function ESLintConfig(server, options) {
    if (options.config && !isEmpty(options.config)) {
      // ESLint config is stored in the .tern-project
      this.config = options.config;
    } else if (options.configFile) {
      // ESLint config is stored in a eslint.json config file.
      var fs = require("fs");
      var filepath = this.filepath = normPath(options.configFile);
      if (!fs.existsSync(filepath)) {
        // try if config file is hosted inside project
        filepath = this.filepath = normPath(server.options.projectDir) + "//" + filepath;
        if (!fs.existsSync(filepath)) {
          throw new Error("Cannot find ESLint config file " + filepath);
        }
      }
      this.update();
    } else {
      // Use default ESLint config
      this.config = defaultConfig;
    }
  }
  
  ESLintConfig.prototype.update = function() {
    var filepath = this.filepath;
    if (filepath) {
      var fs = require("fs"), mtime = fs.statSync(filepath).mtime;
      if (this.mtime == null || (this.mtime.getTime() != mtime.getTime())) {
        var Config = require("eslint/lib/config");        
        this.config = new Config({configFile: filepath, cwd: process.cwd()}).getConfig(filepath);
        this.mtime = mtime;
      }
    }
  }
  
  tern.registerPlugin("eslint", function(server, options) {
    server.mod.eslint = {
      config: new ESLintConfig(server, options)
    }
  });
  
  // copied from eslint\lib\cli-engine.js
  var loadedPlugins = Object.create(null);
  
  /**
   * Load the given plugins if they are not loaded already.
   * @param {string[]} pluginNames An array of plugin names which should be loaded.
   * @returns {void}
   */
  function loadPlugins(pluginNames) {
      var util = require("eslint/lib/util");
      var rules = require("eslint/lib/rules");
      if (pluginNames) {
          pluginNames.forEach(function(pluginName) {
              var pluginNamespace = util.getNamespace(pluginName),
                  pluginNameWithoutNamespace = util.removeNameSpace(pluginName),
                  pluginNameWithoutPrefix = util.removePluginPrefix(pluginNameWithoutNamespace),
                  plugin;

              if (!loadedPlugins[pluginNameWithoutPrefix]) {
                  //debug("Load plugin " + pluginNameWithoutPrefix);

                  plugin = require(pluginNamespace + util.PLUGIN_NAME_PREFIX + pluginNameWithoutPrefix);
                  // if this plugin has rules, import them
                  if (plugin.rules) {
                      rules.import(plugin.rules, pluginNameWithoutPrefix);
                  }

                  loadedPlugins[pluginNameWithoutPrefix] = plugin;
              }
          });
      }
  }
  
  function validate(server, query, file, messages) {

    function getPos(error, from) {
      var line = error.line - 1, ch;
      if (from) {
        ch = error.column - 1;
      } else {
        if ('endLine' in error && 'endColumn' in error) {
          line = error.endLine - 1;
          ch = error.endColumn - 1;
        } else {
          ch = error.column;
        }
      }
      // adjust ch
      if (from) {
        if (ch < 1) ch = 0;
        else if (ch >= file.text.length) ch = file.text.length - 1; 
      } else {
        if (ch < 2) ch = 1;
        else if (ch >= file.text.length) ch = file.text.length;
      }        
      var pos = tern.resolvePos(file, {line: line, ch: ch}, true);
      if (pos > file.text.length) pos = file.text.length;
      return pos;
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

    function makeFix(message) {
      var fix = message.fix;
      if (fix) {
        var range = fix.range;
        return {
          from: tern.outputPos(query, file, range[0]),
          to: tern.outputPos(query, file, range[1]),
          text: fix.text
        }
      }
    }
    
	function makeError(message) {
	  var from = getPos(message, true), to = getPos(message, false);
	  if (from == to) {
	    if (from == 0 && file.text.length >=1) to = 1;
	    else from--;
	  }	  
	  var error = {
	    message: message.message,
	    severity: getSeverity(message),
	    from: tern.outputPos(query, file, from),
	    to: tern.outputPos(query, file, to),
	    lineNumber: message.line
	  }
	  if (message.ruleId) error.id = message.ruleId;
	  if (query.fix) {
	    var fix = makeFix(message);
	    if (fix) error.fix = fix;
	  }
	  if (!query.groupByFiles) error.file = file.name;
	  return error;
	}

	// clear all existing settings for a new file
	var linter = new eslint();
	
	var text = file.text, eslintConfig = server.mod.eslint.config;
	// Update eslint config if needed.
	eslintConfig.update();
	var config = eslintConfig.config;
	var errors = linter.verify(text, config, file.name);
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