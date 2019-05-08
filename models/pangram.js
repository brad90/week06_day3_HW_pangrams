const Panagram = function(string){
  this.string = string
};


Panagram.prototype.checkIfStringIsAPanagram = function(){


  let noSpaceString = this.string.replace(/\s/g,'')
  let splitString = noSpaceString.split('')

  return result = splitString.every((letter) => {
    let indx = splitString.indexOf(letter)
    // letter !== splitString.forEach((a,indx+1) =>{
    //   return a
    // })
    if(splitString.includes(letter, indx + 1) !== true){
      return true}

      return false
    })
};


module.exports = Panagram;


// Cinema.prototype.areAllFilmsOfMinLength = function (length) {
//   return this.films.every((film) => {
//     return film.length >= length;
//   });
// };


// isogram  . sory & then compare.
