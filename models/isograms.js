const Isogram = function(string){
  this.string = string
};



Isogram.prototype.checkIfStringIsAnIsogram = function () {

  let splitString = this.string.toLowerCase()
  splitString = splitString.split('')
  splitString = splitString.sort()


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




module.exports= Isogram;
