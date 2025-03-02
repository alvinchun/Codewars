// card numbers is good
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  // return masked string
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }

  maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);


  // return masked string
function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
      if(i < cc.length - 4) {
        maskedString = maskedString + "#";
      } else {
        maskedString = maskedString + cc.charAt(i);
      };
    }
    return maskedString;
  }

  // return masked string
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }

  const maskify = cc => cc.slice(-4).padStart(cc.length, '#')

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
