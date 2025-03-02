var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };

  function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
  };

  function isAnagram(str1, str2){
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word){
    return word.toLowerCase().split("").sort().join("");
}

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
