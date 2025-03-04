function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

  function isIsogram(str)  {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');
    
    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
  }

  function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
  }

  function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
  }

  function isIsogram(str) {
    var map = {};
    var result = true;
    str.split('').forEach(function(char) {
      if (map[char.toUpperCase()] === undefined) {
        map[char.toUpperCase()] = 1;
      } else {
        result = false;
      }
    });
    return result;
  }

  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i){
      for(j = i + 1; j < str.length; ++j){
        if(str[i] === str[j]){
          return false;
        }
      }
    }

    return true;
  }

  function isIsogram22(str){

    let strInOrder = str.toLowerCase()

    for(let i=0; i < strInOrder.length; i++){
      for(let j=i+1 ; j<strInOrder.length; j++){
        if(strInOrder[i] === strInOrder[j]){
          return false
        }
      console.log(i);
      console.log(j + "s");
      }
      // return true
      // console.log(j + "a");

    }
    return true
  }

  
  function isIsogram33(str){

    let a = new Set(str.toLowerCase())
    // console.log(a);
    
    return a.size === str.length 
    
  }

  // isIsogram("Dermatoglyphics")
// isIsogram("aba"); // return "5 1"
// isIsogram("isogram"); // return "5 1"
// isIsogram("moOse"); // return "5 1"
// isIsogram("isIsogram"); // return "5 1"
// isIsogram(""); // return "5 1"

isIsogram22("abb")
console.log(isIsogram22("abb"));



// console.log(isIsogram22("Dermatoglyphics")); // return "5 1"
// console.log(isIsogram22("isogram")); // return "5 1"
// console.log(isIsogram22("aba")); // return "5 1"
// console.log(isIsogram22("moOse")); // return "5 1"
// console.log(isIsogram22("isIsogram")); // return "5 1"
// console.log(isIsogram22("")); // return "5 1"


// console.log(isIsogram33("Dermatoglyphics")); // return "5 1"
// console.log(isIsogram33("isogram")); // return "5 1"
// console.log(isIsogram33("aba")); // return "5 1"
// console.log(isIsogram33("moOse")); // return "5 1"
// console.log(isIsogram33("isIsogram")); // return "5 1"
// console.log(isIsogram33("")); // return "5 1"
// console.log(isIsogram33("aaaaaaaaa")); // return "5 1"


