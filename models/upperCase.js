const Uppercase = function(sentence){
  this.sentence = sentence
};



Uppercase.prototype.turnStringToUppercase = function (string){
  return string.toUpperCase()
};






module.exports = Uppercase;
