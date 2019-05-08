const assert = require('assert')
const Isogram = require('../models/isograms.js')


describe('Isogram', function(){
  let string1
  let isogram1
  let isogram2

  beforeEach(function(){
    string1 = 'Banana'
    string2 = 'Orange'
    isogram1 = new Isogram(string1)
    isogram2 = new Isogram(string2)
  })

  it('Should return true if sentence is a Isogram__fail', function(){
    const actual = isogram1.checkIfStringIsAnIsogram()
    const expected = false
    assert.deepStrictEqual(actual, expected)
  })

  it('Should return true if sentence is a Isogram__true', function(){
    const actual = isogram2.checkIfStringIsAnIsogram()
    const expected = true
    assert.deepStrictEqual(actual, expected)
  })


});
