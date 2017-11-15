
global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function () {
    examplejs_printLines = [];
  let attrs = {}
  let scope = {}
  examplejs_print(processor(`
  function calc(number) {
    var result = 0
    for (var i = 0; i < number; i++) {
      result += i
    }
    return '数:' + result
  }
  `, attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "function calc(r){for(var c=0,n=0;n<r;n++)c+=n;return\"数:\"+c}"); examplejs_printLines = [];
  });
          
  it("processor():ascii is true", function () {
    examplejs_printLines = [];
  let attrs = {
    ascii: 'yes',
  }
  let scope = {}
  examplejs_print(processor(`
  function calc(number) {
    var result = 0
    for (var i = 0; i < number; i++) {
      result += i
    }
    return '数:' + result
  }
  `, attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "function calc(r){for(var c=0,n=0;n<r;n++)c+=n;return\"\\u6570:\"+c}"); examplejs_printLines = [];
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  let attrs = {}
  let scope = {}
  examplejs_print(processor(null, attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
});
         