function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
