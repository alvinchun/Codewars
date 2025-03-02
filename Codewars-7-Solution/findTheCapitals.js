var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

  var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};

var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
      return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
  };


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
