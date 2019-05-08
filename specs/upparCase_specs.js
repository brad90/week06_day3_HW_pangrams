const assert = require('assert')
const Uppercase = require('../models/upperCase.js')



describe('UpperCase', function(){
  let string1
  let upperCase



    beforeEach(function(){
      string1 = ' Hello is it me your looking for'
      upperCase = new Uppercase(string1)
    });

    it('should return a string all in upper case', function(){
      const actual = upperCase.turnStringToUppercase (string1)
      const expected = ' HELLO IS IT ME YOUR LOOKING FOR'
      assert.deepStrictEqual(actual, expected)
    })
































})
