const assert = require('assert')
const Panagram = require('../models/pangram.js')


describe('Pangram', function(){
  let string1
  let panagram1
  let panagram2

  beforeEach(function(){
    string1 = 'Hello is it me your looking for'
    string2 = 'Two driven jocks help fax my big quiz'
    panagram1 = new Panagram(string1)
    panagram2 = new Panagram(string2)
  })

  it('Should return true if sentence is a panagram__fail', function(){
    const actual = panagram1.checkIfStringIsAPanagram()
    const expected = false
    assert.deepStrictEqual(actual, expected)
  })


  it('Should return true if sentence is a panagram__True', function(){
    const actual = panagram2.checkIfStringIsAPanagram()
    const expected = true
    assert.deepStrictEqual(actual, expected)
  })



})
